import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login/Login';
import Signup from '../components/Singup/Signup';
import Fogot from '../components/Fogot/Fogot';
import Introduce from '../components/Introduce/Introduce';

const Stack = createNativeStackNavigator();

function Screen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="" component={Introduce} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Fogot" component={Fogot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
