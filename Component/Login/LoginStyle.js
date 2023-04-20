import {StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')

export default StyleSheet.create({
 headingText: {
    fontSize:24,
    fontWeight:'bold'
},
heading: {
    display:'flex',
    justifyContent:'center',
     alignItems:'center',
     marginBottom:30
},
iconstyle:{
    width:60,
    height:60
},
inputbox:{
  padding:20,
  marginTop:height*0.22,

  

},
buttonStyle:{
    width:width*0.9,
    padding:12,
    backgroundColor:'#000',
    borderRadius:10,

},
btnText:{
    color:'#FFF',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    letterSpacing:1
},
backgroundImage:{
  width:width,
  height:height,  
},
copyRight:{
  width:width*0.99,
  marginTop:height*0.2

},
copyRightText:{
  textAlign:'center',
  fontWeight:'bold',
  fontSize:14
  
}

});