import React from 'react';
import { View} from 'react-native';
import RootNavigation from './Component/Navigation/RootNavigation'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootReducer from './Component/Storage/RootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
const store=createStore(RootReducer)

export default function App(){

  return (
  <SafeAreaView style={{flex:1}}>
     <Provider store={store}>
     <RootNavigation/>
     </Provider>
 </SafeAreaView>

  )   
};