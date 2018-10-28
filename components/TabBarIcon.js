import React, { Component } from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  render() {
    if (this.props.name === 'routes') {
      return (
        <Icon.MaterialCommunityIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={
            this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      );
    }

    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
