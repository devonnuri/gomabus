import React from 'react';
import { BackHandler, View, StyleSheet, Text } from 'react-native';

export default class RouteDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBack);
  }

  _onBack = () => {
    console.log('shoould pop');
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Blah Blah</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
