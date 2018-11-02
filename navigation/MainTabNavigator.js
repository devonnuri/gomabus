import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RouteScreen from '../screens/RouteScreen';
import RouteDetailScreen from '../screens/RouteDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BusStopScreen from '../screens/BusStopScreen';

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

const RouteStack = createStackNavigator(
  {
    Route: RouteScreen,
    RouteDetail: RouteDetailScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

RouteStack.navigationOptions = {
  tabBarLabel: '노선',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="routes" />
};

const BusStopStack = createStackNavigator({
  BusStop: BusStopScreen
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
