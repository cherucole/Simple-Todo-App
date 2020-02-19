import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/MainScreen';
import Done from '../screens/Done';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Foundation name="home" color={tintColor} size={30} />
        ),
      },
    },
    Categories: {
      screen: Done,
      navigationOptions: {
        tabBarLabel: 'Categories',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="md-done-all" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#F9F8FD',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,
      },
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerShown: false, //this will hide the header,
    },
  },
);

export default createAppContainer(MainNavigator);
