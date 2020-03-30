
import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AnketaScreen extends Component {
  static navigationOptions = {
    title: 'Anketa',
  };

  saved = () => {
    console.log("Сохранено успешно");
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.btnBack}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name={`md-arrow-back`} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>{'Заполните свой профиль'}</Text>
        </View>
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={'Имя'}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={'Фамилия'}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={'email'}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={'Телефон'}
              />
            </View>
            <View style={styles.line}>
              <Button title="Сохранить" onPress={this.saved} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  btnBack: {
    padding: 15
  },
  titleBlock: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#9e9e99'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal'
  },
  form: {
    padding: 20
  },
  line: {
    marginBottom: 20
  },
  inputText: {
    height: 50,
    fontSize: 18,
    paddingLeft: 10,
    borderColor: '#414142',
    borderWidth: 1
  },
});
