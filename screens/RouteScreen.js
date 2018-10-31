import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import { Icon } from 'expo';
import Card from '../components/Card';
import axios from 'axios';
import FormData from 'form-data';

export default class RouteScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    searchRoute: '',
    searchResult: []
  };

  onSearchChange = text => {
    let data = new FormData();
    data.append('busRoute', text);
    axios({
      method: 'post',
      url: 'http://bis.gongju.go.kr/inq/searchBusRoute.do',
      data,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(response => {
        const result = response.data.busRouteDetailList.map(e => {
          const {
            route_id,
            route_name,
            route_direction,
            route_explain,
            st_stop_name
          } = e;

          return {
            route_id,
            route_name,
            route_direction,
            route_explain,
            st_stop_name
          };
        });

        this.setState({ ...this.state, searchResult: result });
      })
      .catch(() => {});
    this.setState({ ...this.state, searchRoute: text });
  };

  render() {
    return (
      <View style={styles.container}>
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
          {this.state.searchResult.length > 0 ? (
            <ScrollView>
              {this.state.searchResult.map((bus, index) => (
                <Card key={index}>
                  <View style={styles.routeHeader}>
                    <Text style={styles.routeName}>{bus.route_name}</Text>
                    <Text style={styles.routeDirection}>
                      {bus.route_direction === '1' ? '기점발' : '종점발'}
                    </Text>
                  </View>
                  <View style={styles.routeExplain}>
                    <Icon.MaterialCommunityIcons
                      name="routes"
                      size={18}
                      style={styles.iconRoute}
                      color="#333"
                    />
                    <Text>{bus.route_explain}</Text>
                  </View>

                  <View style={styles.routeStop}>
                    <Icon.Ionicons
                      name={Platform.OS === 'ios' ? 'ios-bus' : 'md-bus'}
                      size={18}
                      style={styles.iconBus}
                      color="#333"
                    />
                    <Text>{bus.st_stop_name}</Text>
                  </View>
                </Card>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.noSearch}>
              <Text style={styles.noSearchText}>
                위 입력창에 원하시는 버스 번호를 입력하세요.
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
    flex: 1,
    backgroundColor: '#f5f5f5'
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
