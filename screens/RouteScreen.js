import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';

export default class RouteScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    searchRoute: '',
    searchResult: null
  };

  onSearchChange = text => {
    this.setState({ searchRoute: text });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Text style={styles.searchLabel}>버스 번호</Text>
            <TextInput
              style={styles.searchInput}
              onChangeText={this.onSearchChange}
              value={this.state.searchRoute}
              selectionColor="#fff"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={styles.resultSection}>
          {this.state.searchRoute ? null : (
            <View style={styles.noSearch}>
              <Text>위 입력창에 원하시는 버스 번호를 입력하세요.</Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchSection: {
    padding: 10,
    backgroundColor: 'rgb(246, 134, 31)'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10
  },
  searchLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 5
  },
  searchInput: {
    flexGrow: 2,
    height: 40,
    fontSize: 15,
    color: '#fff'
  },
  resultSection: {
    flexGrow: 2,
    backgroundColor: '#eee'
  },
  noSearch: {
    height: 100,
    alignItems: 'center'
  }
});
