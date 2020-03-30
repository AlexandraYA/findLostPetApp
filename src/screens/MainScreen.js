
import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import { FlyButton } from '../components/FlyButton';
import { PostCard } from '../components/PostCard';
 
export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main'
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlyButton
          handlePress={() => navigate('Create')} />
        <View style={styles.topbar}>
          <View>
            <Text style={styles.logoText}>{'FINDLOSTPET'}</Text>
          </View>
          <View style={styles.btnInTopBar}>
            <Button  
              style={styles.signOutBtn}            
              title="out" 
              onPress={this.signOutAsync} />
          </View>
        </View>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>{'Все объявления'}</Text>
        </View>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>{'Фильтр'}</Text>
        </View>
        <ScrollView>
        <View style={styles.posts}>
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka1.jpg")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka2.jpg")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka1.jpg")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka3.png")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka2.jpg")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          <PostCard
            handlePress={() => navigate('Post')}
            imageSource={require("./assets/images/sobaka3.png")}
            description={'Описание потерянного животного'}
            address={'Адрес, где видели в последний раз'}            
          />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a1b9a',
    width: '100%',
    height: 50,
    textAlign: 'center',
    elevation: 6
  },
  btnInTopBar: {
    position: 'absolute',
    right: 10,
    top: 5,
    width: 50,
    height: 40,
    padding: 0,
    elevation: 0
  },
  signOutBtn: {
    width: '100%',
    elevation: 0,
    shadowRadius: 0
  },
  logoText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 5
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
    fontWeight: 'normal',
    color: '#000000'
  },
  posts: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f5f5f6'
  },
  fontWeight: {
    fontWeight: 'bold'
  }
});
