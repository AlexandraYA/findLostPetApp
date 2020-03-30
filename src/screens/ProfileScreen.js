
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Text, View, Image} from 'react-native';
import { PostCard } from '../components/PostCard';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <View>
            <Text style={styles.logoText}>{'Профиль'}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{'Контактные данные'}</Text>
          </View>
          <View style={styles.contacts}>          
            <View style={styles.contactsLine}>
              <Text style={[styles.contactsTitle]}>{'Имя:'}</Text>
              <Text style={styles.contactsText}>{'Андрей Витальевич Фролов'}</Text>
            </View>
            <View style={styles.contactsLine}>
              <Text style={[styles.contactsTitle]}>{'Email:'}</Text>
              <Text style={styles.contactsText}>{'avfrolov@yandex.ru'}</Text>
            </View>
            <View style={styles.contactsLine}>
              <Text style={[styles.contactsTitle]}>{'Телефон:'}</Text>
              <Text style={styles.contactsText}>{'+7 (913) 987-34-27'}</Text>
            </View>
            <View style={styles.contactsLine}>
              <Text style={[styles.contactsTitle]}>{'vk профиль:'}</Text>
              <Text style={styles.contactsText}>{'vk.com/avfrolov'}</Text>
            </View>
            <TouchableOpacity onPress={() => navigate('Anketa')}>
              <Text style={styles.link}>{'Редактировать'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{'Ваши объявления'}</Text>
          </View>        
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
  btnBack: {
    padding: 15
  },
  logoText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    marginBottom: 5
  },
  contacts: {
    backgroundColor: '#E1E2E1',
    padding: 20
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
  contactsLine: {
    flexDirection: 'row',
    marginBottom: 10
  },
  contactsTitle: {
    lineHeight: 24,
    fontSize: 18,
    marginRight: 20,
    fontWeight: 'bold'
  },
  contactsText: {
    lineHeight: 24,
    fontSize: 18
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
  },  
  link: {
    fontSize: 18,
    color: '#304ffe',
    textAlign: 'right'
  }
});
