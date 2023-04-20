import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,Sweetalert,
  Text,
  Image,
  View,
} from 'react-native';
import { Input, Icon } from '@rneui/themed';
import styles from "./LoginStyle"
import {postData} from "../Services/FetchNodeServices" 
import {storeDatasync} from "../Storage/AsyncDataStorage"
import { useNavigation } from '@react-navigation/native' 
import {useDispatch} from 'react-redux'


function Login() {
const [mobileno,setMobileno]=useState('7225834404')
const [password,setPassword]=useState('12345')
var navigation=useNavigation()
var dispatch=useDispatch()
const handleClick=async()=> {
   var result=await postData("users/checkpassword",{mobileno:mobileno,password:password})
   if(result.result)
   {
await storeDatasync(result.data[0].mobileno,result.data[0])
dispatch({type:'ADD_USER',payload:[result.data[0].mobileno,result.data[0]]})
 navigation.navigate("HomeDrw")
   }
   else{
    
    alert('Pls Check Mobile Number /Email Address/Password')
      
   }

} 
return(<View>
 
<ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/BM2.jpg')}>
       <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        
        <View style={styles.inputbox}>
        
        <View style={styles.heading}>
        <Image
        resizeMode={'contain'}
            source={require('../assets/login.png')}
            style={styles.iconstyle}
            
          />
          <Text style={styles.headingText} >Login</Text>
        </View>
        <View>
        <Input
      placeholder='Mobile Number'
      leftIcon={{ type: 'font-awesome', name: 'mobile' }}
      onChangeText={(txt)=>setMobileno(txt)}
      value={mobileno}
       

    />
        </View>


        <View>
        <Input
      placeholder='Password'
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={(txt)=>setPassword(txt)}
      secureTextEntry={true}
      value={password}
    />
        </View>    

    <TouchableOpacity onPress={handleClick}>
    <View style={styles.buttonStyle}>
      <Text style={styles.btnText}>Sign in</Text>
    </View>
    </TouchableOpacity>

     </View>   
     <View style={styles.copyRight}>
       <Text style={styles.copyRightText}>Copyright Reserved to @BestMeds 2022</Text>
     </View>
      </ScrollView>
    </ImageBackground>  
  
</View>)

}
export default Login