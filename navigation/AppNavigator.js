import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import RouteDetailScreen from '../screens/RouteDetailScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  RouteDetail: createStackNavigator({
    RouteDetail: {
      screen: RouteDetailScreen
    }
  })
});
