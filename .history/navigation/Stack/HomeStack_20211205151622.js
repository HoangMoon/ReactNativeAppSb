import * as React from 'react';
// import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../components/Home/Home';
import Details from '../../components/Details/Details';
// import {FeatureItem} from '../components/Home/ProductItem';

const Stack = createNativeStackNavigator();

function StackHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        screenOptions={{headerShown: false}}
      />
      {/* <Stack.Screen name="Feature" component={FeatureItem} /> */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackHome;
