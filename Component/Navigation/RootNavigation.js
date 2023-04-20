import React from 'react';

import {
  
Text,
  View,
  Touchable,Switch
} from 'react-native';
import { Avatar, Icon } from '@rneui/themed';
import FA from 'react-native-vector-icons/FontAwesome';
import FE from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login/Login';
import Home from '../Home/Home';
import ProductView from '../ProductView/ProductView';
import ShowCart from '../Cart/ShowCart';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation, NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme } from '@react-navigation/native'
import AppHeader from './AppHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PaymentGateway from '../Cart/PaymentGateway';


function RootNavigation() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: '#ffffff',
      text: '#000'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: '#000',
      text: '#ffffff'
    }
  }

 const toggleTheme=() => {
    setIsDarkTheme(!isDarkTheme);
  }


  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const ProjectDrawer = () => {
      return (
        
        <Drawer.Navigator theme={theme}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home"  onPress={() => navigation.navigate('Home')}  icon={()=><FA name={'tv'} size={24} />} component={Home} options={{headerShown:false}} />
          
          <Drawer.Screen name="ProductView"     icon={()=><FA name={'tv'} size={24} />}
          
          onPress={() => navigation.navigate('ProductView')} component={ProductView} options={{headerShown: false}} />
  
        </Drawer.Navigator>
      );
    };
  

    function CustomDrawerContent(props) {
      return (
        <DrawerContentScrollView {...props} >
          <View
            style={{
              display: 'flex',
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <Avatar size={64} rounded source={require('../assets/5911.jpg')} />
            <Text style={{fontWeight: 'bold', fontSize: 14, color:theme.colors.text}}>Sidhu</Text>
            <Text style={{fontWeight: 'bold', fontSize: 14, color:theme.colors.text}}>9876543210</Text>
          </View>
<View>
          <TouchableOpacity onPress={() => {toggleTheme()}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical: 12,paddingHorizontal: 16,}}>
                                <Text style={{fontWeight: 'bold', fontSize: 14, color:theme.colors.text}}>Mode</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableOpacity>
</View>
          <DrawerItemList {...props} />
          
          <DrawerItem 
            label="Logout" onPress={() => props.navigation.navigate("Login")}
            icon={()=><FE name={'log-out'} size={24} color={theme.colors.text} />

            
          }
           
          />
        </DrawerContentScrollView>
      );
    }

  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator>
    <Stack.Screen   name="Login" component={Login}  options={{headerShown:false}} />
    <Stack.Screen   name="HomeDrw" component={ProjectDrawer}  options={{header:AppHeader}}  />
       <Stack.Screen   name="ProductView" component={ProductView}  options={{headerShown:false}} />
       <Stack.Screen   name="AppHeader" component={AppHeader}  options={{headerShown:false}} />
       <Stack.Screen   name="ShowCart" component={ShowCart}  options={{headerShown:false}} />
       <Stack.Screen   name="PaymentGateway" component={PaymentGateway}  options={{headerShown:false}} />
     </Stack.Navigator>
     </NavigationContainer>
  );
};


export default RootNavigation;
