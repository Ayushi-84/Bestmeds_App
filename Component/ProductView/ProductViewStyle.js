import { Button } from '@rneui/base';
import {StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')

export default StyleSheet.create({

rootStyle:{
  backgroundColor:'#FFF',
  height:height

},
rootProductView:{
display:'flex',
justifyContent:'center',
alignItems:'center'


},
productView:{
  
  padding:10,
  marginBottom:10,
  width:width*0.92,
  
  
  
  
  
},
imageView:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  
},
productImage:{
  width:width*0.6,
  height:height*0.3,
resizeMode:'contain',


},
contentView:{
  display:'flex',
  flexDirection:'column',

},
textStyleProduct:{
  fontSize:26,
  fontWeight:'bold',
  color:'#000',
  marginBottom:5,
  width:width*0.9
},
priceStyleProduct:{
  fontSize:24,
  fontWeight:'bold',
  color:'green',
  marginBottom:7
},

offerStyleProduct:{
  fontSize:20,
  
  color:'#5f27cd',
  marginBottom:7
},
textStyle:{
  fontSize:16,
  fontWeight:'800' 
},
dividerStyle:{color:'#000',
width:width},
qtyStyle:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  padding:10,
  height:height*0.2
},
buttonView:{width:width*0.95, display:'flex',flexDirection:'row',justifyContent:'space-around',position:'absolute',top:height*0.82},
buttonStyle:{
 display:'flex',
 justifyContent:'center',
 alignItems:'center', 
 width:width*0.45,
 backgroundColor:'#000',
 height:height*0.07,
 borderRadius:10,
},
textColor:{
  fontSize:20,
  fontWeight:'bold',
  color:'#FFF'
}


});