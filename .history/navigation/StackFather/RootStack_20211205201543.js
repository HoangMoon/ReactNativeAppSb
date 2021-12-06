import * as React from 'react';
// import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../components/Login/Login';
import Introduce from '../../components/Introduce/Introduce';
import Fogot from '../../components/Fogot/Fogot';
import Signup from '../../components/Singup/Signup';
import HomeTab from '../Tab/TabHome';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Introduce} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Fogot" component={Fogot} />
        <Stack.Screen name="TabHome" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
