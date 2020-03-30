
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

let screenW = Dimensions.get('window').width;

export default class PostShowScreen extends Component {
  static navigationOptions = {
    title: 'Post',
  };

  constructor() {
    super();

    this.state = {
      activeSlide: 0,
      dogs: [
        {image: require("./assets/images/sobaka1.jpg")},
        {image: require("./assets/images/sobaka2.jpg")},
        {image: require("./assets/images/sobaka3.png")}
      ]
    };
  }

  _renderItem ({item, index}) {
    return (
      <Image
        resizeMode={'center'}
        style={{width: '100%', height: 220}}
        source={item.image}
      />
    );
  }
  
  get pagination () {
    const { dogs, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={dogs.length}
          activeDotIndex={activeSlide}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: '#414142'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
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
            <Text style={styles.title}>{'Ищем собаку хаски темную'}</Text>
        </View>
        <ScrollView>
          <View style={styles.imageWrapper}>
            <View style={styles.postImage}>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.dogs}
                renderItem={this._renderItem}
                sliderWidth={screenW}
                itemWidth={screenW}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />
              { this.pagination }
            </View>
          </View>
          <View style={styles.post}>            
            <View style={styles.postMsg}>            
              <View style={styles.postLine}>
                <Text style={[styles.postText, styles.fontWeight]}>{'Кличка:'}</Text>
                <Text style={styles.postText}>{'Окело'}</Text>
              </View>
              <View style={styles.postLine}>
                <Text style={[styles.postText, styles.fontWeight]}>{'Описание:'}</Text>
                <Text style={styles.postText}>
                  {'Большой. Голова на уровне пояса. Белая короткая шерсть. Ошейник с именем.'}
                </Text>
              </View>
              <View style={styles.postLine}>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Адрес, где видели в послений раз:'}
                </Text>
                <Text style={styles.postText}>
                  {'район Дорогомилово, ул. Большая Маросейка, у дома 23'}
                </Text>
              </View>
              <View style={styles.postLine}>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Адрес, где потерялся:'}
                </Text>
                <Text style={styles.postText}>
                  {'район Дорогомилово, ул. Каракатица, у дома 3'}
                </Text>
              </View>
              <View style={styles.postLine}>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Дополнительая информация:'}
                </Text>
                <Text style={styles.postText}>
                  {'Пугливый. Любит вкусняшки собачьи.'}
                </Text>
              </View>            
            </View>          
          </View>        
          <View style={styles.comments}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>{'Комментарии'}</Text>
            </View>
            <View style={styles.commentLine}>
              <View>
                <Text style={styles.postText}>
                  {'Видела вчера у остановки у дома 5 по Большой Маросейки.'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Ирина (@irinasheik)'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontSmall]}>
                  {'24.05.2019 22:00'}
                </Text>
              </View>
            </View>
            <View style={styles.commentLine}>
              <View>
                <Text style={styles.postText}>
                  {'Видела вчера у остановки у дома 5 по Большой Маросейки.'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Ирина (@irinasheik)'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontSmall]}>
                  {'24.05.2019 22:00'}
                </Text>
              </View>
            </View>
            <View style={styles.commentLine}>
              <View>
                <Text style={styles.postText}>
                  {'Точно, а я удома 2 по Большой Маросейки.'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontWeight]}>
                  {'Артем (@artemmaster)'}
                </Text>
              </View>
              <View>
                <Text style={[styles.postText, styles.fontSmall]}>
                  {'25.05.2019 02:00'}
                </Text>
              </View>
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
    backgroundColor: '#f5f5f6'
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
  post: {
    width: '100%',
    flexDirection: 'column'
  },
  imageWrapper: {
    marginTop: 20,
    marginBottom: 20
  },
  postImage: {
    width: '100%',
    height: 240
  },
  postMsg: {
    padding: 20
  },
  postLine: {
    marginBottom: 10
  },
  postText: {
    lineHeight: 24,
    fontSize: 18
  },
  comments: {
    borderTopWidth: 2,
    borderTopColor: '#9e9e99',
    paddingBottom: 20
  },
  commentLine: {
    padding: 20    
  },
  fontWeight: {
    fontWeight: 'bold'
  },
  fontSmall: {
    fontSize: 14,
    color: 'gray'
  }
});
