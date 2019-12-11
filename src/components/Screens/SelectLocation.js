import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import MapView from 'react-native-maps'

export default class SelectLocation extends Component {
  async componentDidMount() {
    // MapboxGL.setTelemetryEnabled(false);
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView
               style={styles.map}
               initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
               }}
            /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
