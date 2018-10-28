import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RouteScreen from '../screens/RouteScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: '홈',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  )
};

const RouteStack = createStackNavigator({
  Route: RouteScreen
});

RouteStack.navigationOptions = {
  tabBarLabel: '노선',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="routes" />
};

const BusStopStack = createStackNavigator({
  Settings: SettingsScreen
});

BusStopStack.navigationOptions = {
  tabBarLabel: '정류장',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-bus${focused ? '' : '-outline'}` : 'md-bus'
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: '설정',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-options${focused ? '' : '-outline'}`
          : 'md-options'
      }
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  RouteStack,
  BusStopStack,
  SettingsStack
});
