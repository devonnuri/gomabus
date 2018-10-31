import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo';

class GradientCard extends Component {
  render() {
    return (
      <LinearGradient
        colors={['rgb(247, 97, 161)', 'rgb(140, 27, 171)']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.content}>{this.props.children}</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginRight: 10,
    borderRadius: 30
  },
  content: {
    color: 'white',
    fontSize: 15
  }
});

export default GradientCard;
