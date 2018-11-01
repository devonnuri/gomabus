import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

class Card extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <TouchableOpacity style={styles.container} {...props}>
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default Card;
