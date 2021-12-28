import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Maps from '../Stack/Maps';
import Profile from '../Stack/Profile/Profile';
import DelyMap from '../Stack/DelyMap';
import Chats from '../Stack/Chat';
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator
      activeColor="#F53959"
      inactiveColor="#F53959"
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
      <Tab.Screen
        name="Dely"
        component={DelyMap}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Icon name="shipping-fast" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarLabel: '',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <Icon name="map-marker-alt" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chats}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="chatbubble-ellipses-sharp"
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
