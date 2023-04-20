import React,{useState} from 'react';

import {
  
Text,
  View,Image,
  Dimensions
} from 'react-native';
import {Divider, Input } from '@rneui/themed';
import styles from "./ProductViewStyle"
import { postData,ServerURL } from '../Services/FetchNodeServices';
import NumericInput from 'react-native-numeric-input'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux'
import { useNavigation,useTheme } from '@react-navigation/native' 
const {width,height}=Dimensions.get('window')
 
const data=[{brandid: 4, brandname: "Dabur", categoryid: 1, categoryname: "ayush", description: "Chywanprash", offerprice: "250", offertype: "Festival", picture: "e4c86ea2-ba18-49b5-91fc-124389eae435.jpg", price: 500, productid: 3, productname: "Chyawanprash", qty: 1, rating: "9", salestatus: "trending", status: "trending", stock: "800",subcategoryid: 8, subcategoryname: "ayurveda"}]

function ProductView(props) {
  console.log("props in product view>>>>>>>>>",props.route.params.product)
  var product=props.route.params.product==undefined?data:props.route.params.product
  var dispatch=useDispatch()
  var navigation=useNavigation()
  const [value,setValue]=useState(1) 
  const theme=useTheme()

  const handleQtyChange = ( item) => {
  console.log(value)
    if (value > 0) {
        item['qty'] = value
        setValue(value)
        dispatch({ type: 'ADD_PRODUCT', payload: [item.productid, item] })
    }
    else {
        dispatch({ type: 'DEL_PRODUCT', payload: [item.productid, item] })
    }
    props.navigation.setParams({'x':''})
}
  return (
    <View style={{
      backgroundColor:theme.colors.background,
      height:height
    
    }} >
    <View style={styles.rootProductView}>
    <View style={styles.productView}>
    <View style={styles.imageView}>
        <Image
          style={styles.productImage}
          
          source={{uri: `${ServerURL}/images/${product.picture}`}}
        />
      </View>
    </View>
    <Divider style={{color:theme.colors.background,
width:width}} width={1} />

    <View style={styles.productView}>
  
  <View style={styles.contentView}>
  <Text numberOfLines={1} style={{fontSize:26,fontWeight:'bold',color:theme.colors.text,marginBottom:5,width:width*0.9}}>{product.brandname} {product.productname} </Text>
  <Text style={styles.priceStyleProduct}>BestPrice* &#8377; {product.price-product.offerprice}</Text>
  <Text style={styles.offerStyleProduct}>MRP  &#8377;{product.price} GET {((product.offerprice*100)/product.price).toFixed(1)}% OFF</Text>
  <Text style={{ fontSize:16, fontWeight:'800',color:theme.colors.text}}>(Inclusive all taxes)</Text>
  <Text style={{ fontSize:16, fontWeight:'800',color:theme.colors.text}}>* Mkt: Inlife Pharma Private Limited</Text>
  <Text style={{ fontSize:16, fontWeight:'800',color:theme.colors.text}}>* Country of Origin: India</Text>
  <Text style={{ fontSize:16, fontWeight:'800',color:theme.colors.text}}>* Delivery charges if applicable will be </Text>
  <Text style={{ fontSize:16, fontWeight:'800',color:theme.colors.text}}>   applied at checkout</Text>
  
  
                  


  </View>
  
  <View style={styles.qtyStyle}>
  <NumericInput 
            value={value} 
            onChange={value => setValue(value)} 
          
            maxValue={10}
            minValue={1}
            totalWidth={200} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='integer'
            rounded 
            textColor={theme.colors.text}
            iconStyle={{ color: theme.colors.background }} 
            rightButtonBackgroundColor={theme.colors.text} 
            leftButtonBackgroundColor={theme.colors.text}/>
  </View>
  
  </View>
   <View style={styles.buttonView}>
   <TouchableOpacity onPress={()=>handleQtyChange(product)}>
     <View style={{
 display:'flex',
 justifyContent:'center',
 alignItems:'center', 
 width:width*0.45,
 backgroundColor:theme.colors.background,
 height:height*0.07,
 borderRadius:10,
}}>
      <Text style={{
  fontSize:20,
  fontWeight:'bold',
  color:theme.colors.text
}}>Add to Cart</Text>
     </View>
     </TouchableOpacity>  
     <TouchableOpacity onPress={()=>navigation.navigate('Home')}>  
     <View style={{
 display:'flex',
 justifyContent:'center',
 alignItems:'center', 
 width:width*0.45,
 backgroundColor:theme.colors.text,
 height:height*0.07,
 borderRadius:10,
}}>
       <Text style={{
  fontSize:20,
  fontWeight:'bold',
  color:theme.colors.background
}}>Continue Shopping</Text>
     </View>
     </TouchableOpacity>
     </View>  
     
    </View>
    </View>
  );
};


export default ProductView;
