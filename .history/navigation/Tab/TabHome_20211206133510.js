import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      activeColor="red"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'red'}}
      screenOptions={{
        headerShown: false,
      }}
      screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="TabHome" component={StackHome} /> */}
      <Tab.Screen
        name="TabHome"
        component={StackHome}
        options={{
          tabBarLabel: '',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
