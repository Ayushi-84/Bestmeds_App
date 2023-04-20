import React,{useEffect,useState,useRef} from 'react';
import {Divider, Input } from '@rneui/themed';
import {  
Text,
  View,FlatList,Image,Dimensions
} from 'react-native';
import styles from "./HomeStyle"
import { postData,ServerURL } from '../Services/FetchNodeServices';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation,useTheme } from '@react-navigation/native'
import ReactNativeAnimatedSearchbox from 'react-native-animated-searchbox'; 
const {width,height}=Dimensions.get('window')

const ShowProducts = ({ item,navigation,theme }) => (
  
  <TouchableOpacity onPress={()=>navigation.navigate('ProductView',{product:item})}>
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
  marginBottom:5
}}>MRP  &#8377;{item.price} GET {((item.offerprice*100)/item.price).toFixed(1)}% OFF</Text>
  <Text style={{color:theme.colors.text}}>(Inclusive all taxes)</Text>
                  


  </View>
  </View>
  </View>
  </TouchableOpacity>
);

function Home() {
 const [products,setProducts]=useState([])
 const [getSearchListTemp,setSearchListTemp]=useState([])
 const [searchIconColor, setSearchIconColor] = useState("#555");
 var navigation=useNavigation()
 const refSearchBox = useRef();
 const fetchAllProducts=async()=>{
  var result=await postData('products/searchproductbysalestatus',{salestatus:'Trending'})
  setProducts(result.result)
setSearchListTemp(result.result)
 }

 const handleSearchList = search => {
  var temp = getSearchListTemp.filter(item => {
    return (
      item.brandname.toLowerCase().includes(search.toLowerCase()) ||
      item.productname.toLowerCase().includes(search.toLowerCase())
    );
  });
  setProducts(temp);
};
 
 useEffect(function(){
fetchAllProducts()

 },[])

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
  <ReactNativeAnimatedSearchbox
          ref={refSearchBox}
          placeholder={"Search..."}
          searchIconColor={searchIconColor}
          onClosed={() => {
            setSearchIconColor("#f8f9fd");
          }}
          onOpening={() => {
            setSearchIconColor("#555");
          }}
          onChangeText={txt => handleSearchList(txt.toLowerCase())}
        />
</View>
<View style={{height:height*0.83}}>
<FlatList
        data={products}
        renderItem={({item})=><ShowProducts  item={item} navigation={navigation} theme={theme}/>}
        keyExtractor={item => item.productid}
    
     
    
      />
</View>

    </View>
  );
};


export default Home;
 