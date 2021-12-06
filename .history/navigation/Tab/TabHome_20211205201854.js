import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="TabHome1" component={StackHome} />
    </Tab.Navigator>
  );
}
