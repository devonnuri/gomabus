import React from 'react';
import { BackHandler, View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card, CardTitle, CardContent } from 'react-native-cards';
import axios from 'axios';
import FormData from 'form-data';

export default class RouteDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    stops: [],
    buses: []
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBack);

    let data = new FormData();
    const { route } = this.props.navigation.state.params;
    data.append('busRouteId', route.route_id);

    Promise.all([
      axios({
        method: 'post',
        url: 'http://bis.gongju.go.kr/inq/searchBusRouteDetail.do',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }),
      axios({
        method: 'post',
        url: 'http://bis.gongju.go.kr/inq/searchBusRealLocationDetail.do',
        data,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
    ])
      .then(([{ data: stops }, { data: buses }]) => {
        this.setState({
          stops: stops.busRouteDetailList,
          buses
        });
      })
      .catch(() => {});
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBack);
  }

  _onBack = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    const { route } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <Card>
          <CardTitle
            title={route.route_name}
            subtitle={`${
              route.route_direction === '1' ? '기점발' : '종점발'
            } [${route.route_explain}]`}
          />
          <CardContent text={'현재 정류장: ' + route.st_stop_name} />
        </Card>
        <Card>
          <CardTitle title="버스 노선" />
          <CardContent>
            {this.state.stops.map((stop, index) => (
              <View key={index} style={styles.stop}>
                <Text style={styles.stopName}>{stop.stop_name}</Text>
                <Text style={styles.stopInfo}>●</Text>
              </View>
            ))}
          </CardContent>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10
  },
  stop: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  stopName: {
    fontSize: 20
  },
  stopInfo: {
    alignSelf: 'flex-end'
  }
});
