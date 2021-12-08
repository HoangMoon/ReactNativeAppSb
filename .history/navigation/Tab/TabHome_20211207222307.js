import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Stack/Profile';
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
      {/* <Tab.Screen
        name="Mapdetails"
        component={StackHome}
        options={{
          tabBarLabel: '',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="box" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={StackHome}
        options={{
          tabBarLabel: '',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart-plus" color={color} size={35} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Maps"
        component={StackHome}
        options={{
          tabBarLabel: '',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker-alt"
              color={color}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profiletab"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
