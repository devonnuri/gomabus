import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { WebBrowser } from 'expo';

import Card from '../components/Card';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.routeSection}>
            <Text style={styles.sectionHeader}>노선 추천</Text>
            <ScrollView horizontal>
              <Card>125번</Card>
              <Card>101번</Card>
              <Card>100번</Card>
            </ScrollView>
          </View>
          <View style={styles.nearStopSection}>
            <Text style={styles.sectionHeader}>근처 버스 정류장</Text>
            <ScrollView horizontal>
              <Card>공주중학교(무령왕릉 방면)</Card>
              <Card>공주중학교(산성시장 방면)</Card>
              <Card>공산성(무령왕릉 방면)</Card>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  routeSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  nearStopSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  sectionHeader: {
    fontSize: 30,
    fontFamily: 'noto-sans-bold'
  }
});
