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
    data: {}
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBack);

    // let data = new FormData();
    // data.append('busRouteId', this.props.navigation.state.params.bus);

    // axios({
    //   method: 'post',
    //   url: 'http://bis.gongju.go.kr/inq/searchBusRouteDetail.do',
    //   data,
    //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
    // }).then(response => {
    //   this.setState({ data: response.data });
    // });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBack);
  }

  _onBack = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    const { bus } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <Card>
          <CardTitle
            title={bus.route_name}
            subtitle={`${bus.route_direction === '1' ? '기점발' : '종점발'} [${
              bus.route_explain
            }]`}
          />
          <CardContent text={'현재 정류장: ' + bus.st_stop_name} />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  routeName: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
