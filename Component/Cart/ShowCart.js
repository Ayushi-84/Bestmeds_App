import React,{useEffect,useState} from 'react';
import {Divider, Input } from '@rneui/themed';
import {  
Text,
  View,FlatList,Image,Dimensions, ImageBackground,TouchableOpacity
} from 'react-native';
import styles from "./ShowCartStyle"
import { postData,ServerURL } from '../Services/FetchNodeServices';
import { useNavigation,useTheme } from '@react-navigation/native' ;
import { useSelector } from 'react-redux';
import MI from "react-native-vector-icons/MaterialIcons"
import AD from "react-native-vector-icons/AntDesign"
const {width,height}=Dimensions.get('window')

const ShowProducts = ({ item,navigation,theme }) => (
  
  <View style={styles.rootProductView}>
  <View style={{
  display:'flex',
  padding:10,
  marginBottom:10,
  width:width*0.92,
  flexDirection:'row',
  borderWidth:0.5,
  borderColor:theme.colors.text,
  borderRadius:10,
  
}}>
  
  <View style={styles.imageView}>
        <Image
          style={styles.productImage}
          
          source={{uri: `${ServerURL}/images/${item.picture}`}}
        />
      </View>
<View style={styles.contentView}>
  <Text numberOfLines={1} style={{
  fontSize:18,
  fontWeight:'bold',
  color:theme.colors.text,
  marginBottom:5,
  width:width*0.45
}}>{item.brandname} {item.productname} </Text>
  <Text style={styles.priceStyleProduct}>BestPrice* &#8377; {item.price-item.offerprice}</Text>
  <Text style={{
  fontSize:16,
 color:theme.colors.text,
  marginBottom:5,
  fontWeight:'700'
}}>Quantity Added: {item.qty}</Text>
  <Text style={{
  fontSize:16,
  
  color:theme.colors.text,
  marginBottom:5
}}>MRP  &#8377;{item.price} GET {((item.offerprice*100)/item.price).toFixed(1)}% OFF</Text>
  <Text style={{color:theme.colors.text}}>(Inclusive all taxes)</Text>
 
                  


  </View>
  </View>
  </View>
);

function ShowCart(props) {
 const [products,setProducts]=useState([])

 var navigation=useNavigation()
 const fetchAllProducts=async()=>{
  var result=await postData('products/searchproductbysalestatus',{salestatus:'Trending'})
  setProducts(result.result)


 }
 var data=useSelector(state=>state.product)
 var dataValues=Object.values(data)
 var dataKeys=Object.keys(data).length
 
 useEffect(function(){
fetchAllProducts()

 },[])

 var info=0
dataValues.map((item, index) => {
   info+=item.qty*item.price
           return (
            info
           );
         })

 const theme=useTheme()

  return (

    <View style={{
      backgroundColor:theme.colors.background,
      height:height
    
    }}>
    <Divider/>
    <View style={{
 backgroundColor:theme.colors.background,
 margin:5,   
}}>
<View style={{
 backgroundColor:theme.colors.background,
 height:height*0.35,
 margin:5,  
}}>
 <ImageBackground
        resizeMode={'contain'}
            source={require('../assets/shopping.jpeg')}
            style={{height:height*0.35 }}
            
          >
           <View style={{flexDirection:'row',width:width*0.85,justifyContent:'space-between',marginTop:20}}>
      <View style={{flexDirection:'row',width:width*0.85,justifyContent:'space-between'}}>
     
      <TouchableOpacity onPress={()=>props.navigation.goBack()}>
      <MI name='arrow-back' size={24} color="#000" style={{marginLeft:10}}  />
      </TouchableOpacity>

      <Text style={{fontSize:24,color:'#000',marginRight:160}}>My Cart</Text>

      <AD name='upload' size={24} color="#000" style={{marginRight:15}} />
      </View>
      <MI name='info-outline' size={24} color="#000"/>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',height:height*0.2}}>
          <View style={{backgroundColor:'white',position:'absolute',height:height*0.12,width:width*0.3, justifyContent:'center', alignItems:'center',borderRadius:10,alignSelf:'center'}}>
          <Text style={{color:'#000',fontWeight:'800'}}>Total Price</Text>
          <Text style={{color:'#000'}}>&#8377;{info}</Text>
          </View>
</View>
</ImageBackground>
</View>
</View>
<View style={{height:height*0.5}}>
<FlatList
        data={dataValues}
        renderItem={({item})=><ShowProducts  item={item} navigation={navigation} theme={theme}/>}
        keyExtractor={item => item.productid}
      />
</View>
<TouchableOpacity onPress={()=>props.navigation.navigate('PaymentGateway',{price:info})} disabled={dataKeys!=0?false:true}>
<View style={{height:height*0.1,backgroundColor:theme.colors.text,justifyContent:'center'}}>
<Text style={{color:theme.colors.background,fontSize:20,alignSelf:'center'}}>
Buy
</Text>
</View>
</TouchableOpacity>

    </View>
  );
};


export default ShowCart;