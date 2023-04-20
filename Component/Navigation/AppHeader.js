import React from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome';
import IC from 'react-native-vector-icons/Ionicons';
import { Badge } from '@rneui/themed';
import { useNavigation,useTheme } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'
import {useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
export default function AppHeader(props) {
  const theme=useTheme();
  var cart = useSelector(state => state.product);
  var navigation=useNavigation() 
  var keys = Object.keys(cart);
  console.log('keys', keys.length);

  return (
    <View>
    
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width,
          backgroundColor: theme.colors.background,
          height: height * 0.07,
          flexDirection: 'row',
          paddingTop: 3,
          paddingBottom:10
        }}>
       
       <IC style={{paddingLeft:10,color:theme.colors.text}} name="md-menu-outline" size={30} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}/>  
       <Image
        style={{width:120,height:60,resizeMode:'contain'}}
        source={require('../assets/login.png')}
      />
     
       <TouchableOpacity
         style={{paddingRight:10}}
       //   onPress={() => props.navigation.navigate('showcart')}
          >
          <View >
            <FA name="shopping-cart" color={theme.colors.text} size={30} 
           onPress={()=>navigation.navigate('ShowCart')} 
            />
            <Badge
              status="error"
              value={keys.length}
              containerStyle={{position: 'absolute', top: -7, right: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
