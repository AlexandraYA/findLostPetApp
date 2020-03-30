
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.popup}>
            <Text style={styles.welcome}>{'Карта'}</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 55.737950,
            longitude: 37.520747,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker 
            title={'I am here'}
            coordinate={{
              latitude: 55.737950,
              longitude: 37.520747,
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
});
