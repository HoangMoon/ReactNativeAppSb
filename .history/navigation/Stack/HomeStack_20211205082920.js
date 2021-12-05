import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import Signup from '../components/Singup/Signup';
import Fogot from '../components/Fogot/Fogot';
import Introduce from '../components/Introduce/Introduce';
import Home from '../components/Home/Home';
import Details from '../components/Details/Details';
import {FeatureItem} from '../components/Home/ProductItem';
import Cart from '../components/Cart/Cart';

const Stack = createNativeStackNavigator();

function Screen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Feature" component={FeatureItem} /> */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Screen;
