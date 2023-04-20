import {StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')

export default StyleSheet.create({
searchStyle:{
 backgroundColor:'#FFF',
 margin:5,   
},

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
  display:'flex',
  padding:10,
  marginBottom:10,
  width:width*0.92,
  flexDirection:'row',
  borderWidth:0.5,
  borderColor:'#000',
  borderRadius:10,
  
},
imageView:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  
},
productImage:{
  width:width*0.4,
  height:height*0.15,
resizeMode:'contain',


},
contentView:{
  display:'flex',
  flexDirection:'column',

},
textStyleProduct:{
  fontSize:18,
  fontWeight:'bold',
  color:'#000',
  marginBottom:5,
  width:width*0.45
},
priceStyleProduct:{
  fontSize:16,
  fontWeight:'bold',
  color:'green',
  marginBottom:5
},

offerStyleProduct:{
  fontSize:16,
  
  color:'#000',
  marginBottom:5
}


});