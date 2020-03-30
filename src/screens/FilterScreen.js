
import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default class FilterScreen extends Component {
  static navigationOptions = {
    title: 'Filter',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.popup}>
            <Text style={styles.welcome}>{'Карта'}</Text>
        </View>
        <Button
          title="Go to Main"
          onPress={() => navigate('Main', {name: 'Jane'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
