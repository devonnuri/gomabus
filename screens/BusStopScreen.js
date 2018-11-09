import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { Card, CardTitle, CardContent } from 'react-native-cards';
import axios from 'axios';

export default class BusStopScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    searchStop: '',
    searchResult: []
  };

  _onSearchChange = text => {
    if (!text) {
      this.setState({ ...this.state, searchResult: [] });
      return;
    }

    let data = new FormData();
    data.append('busStop', text);

    axios({
      method: 'post',
      url: 'http://bis.gongju.go.kr/inq/searchBusStop.do',
      data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(response => {
      this.setState({ ...this.state, searchResult: response.data.busStopList });
    });
    this.setState({ ...this.state, searchStop: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Text style={styles.searchLabel}>정류장 이름</Text>
            <TextInput
              style={styles.searchInput}
              onChangeText={this._onSearchChange}
              value={this.state.searchStop}
              selectionColor="#fff"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={styles.resultSection}>
          {this.state.searchResult.length > 0 ? (
            <ScrollView>
              {this.state.searchResult.map((stop, index) => (
                <TouchableOpacity
                  key={index}
                  // onPress={() =>
                  //   this.props.navigation.navigate('RouteDetail', {
                  //     route
                  //   })
                  // }
                >
                  <Card>
                    <CardTitle title={stop.stop_name} />
                  </Card>
                </TouchableOpacity>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.noSearch}>
              <Text style={styles.noSearchText}>
                위 입력창에 원하시는 정류장 이름을 입력하세요.
              </Text>
            </View>
          )}
        </View>
      </View>
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
    backgroundColor: 'rgb(195, 91, 39)'
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
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  noSearch: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  routeHeader: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8
  },
  iconRoute: {
    marginRight: 5
  },
  iconBus: {
    marginRight: 7
  },
  routeName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  routeDirection: {
    fontSize: 15,
    marginLeft: 'auto'
  },
  routeExplain: {
    flexDirection: 'row'
  },
  routeStop: {
    flexDirection: 'row',
    marginLeft: 3
  }
});
