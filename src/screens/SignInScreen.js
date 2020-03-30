
import React, {Component} from 'react';
import {Button, View, Text, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignInScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }
  
  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Root');
  };

  onChangeLogin = (text) => {
    this.setState({
      login: text
    });
  };

  onChangePwd = (text) => {
    this.setState({
      password: text
    });
  };

    render() {
      const { login, password } = this.state;
      return (
        <View style={styles.container}>
          <View style={styles.centerBlock}>
            <View style={styles.line}>
              <Text style={styles.logoText}>{'FINDLOSTPET'}</Text>
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => this.onChangeLogin(text)}
                placeholder={'Логин'}
                value={login}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => this.onChangePwd(text)}
                placeholder={'Пароль'}
                value={password}
              />
            </View>
            <View style={styles.line}>
              <Button title="Войти!" onPress={this.signInAsync} />
            </View>            
            <View style={styles.line}>
              <Text style={styles.link}>{'Забыли пароль?'}</Text>
            </View>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f6'
  },
  centerBlock: {
    width: '80%',
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    elevation: 2
  },
  line: {
    marginBottom: 20
  },
  logoText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 22,
    marginBottom: 5
  },
  inputText: {
    height: 40,
    fontSize: 18,
    paddingLeft: 10,
    borderColor: '#414142',
    borderWidth: 1
  },
  link: {
    color: '#304ffe',
    textAlign: 'center'
  }
});
  