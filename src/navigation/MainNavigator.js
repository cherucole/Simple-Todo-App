import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import Home from '../screens/MainScreen';
import Done from '../screens/Done';
import Add from '../screens/AddItem';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Foundation name="home" color={tintColor} size={30} />
        ),
      },
    },
    Categories: {
      screen: Done,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-done-all" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#6161F3',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#111025',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: '#6161F3',
        shadowOpacity: 1,
        elevation: 5,
      },
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    Add: Add,
  },
  {
    defaultNavigationOptions: {
      headerShown: false, //this will hide the header,
    },
  },
);

export default createAppContainer(MainNavigator);
