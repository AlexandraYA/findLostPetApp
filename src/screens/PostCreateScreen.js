
import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Загрузка фотографии',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class PostCreateScreen extends Component {
  static navigationOptions = {
    title: 'Post Create'
  };

  constructor() {
    super();

    this.state = {
      imageSource: require("./assets/imgdefault/noimage.jpg")
    }
  }

  openImageLibrary = () => {

    ImagePicker.showImagePicker(options, (response) => {
      // console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          imageSource: source
        });
      }
    });
  }

  postCreated = () => {
    console.log("postCreated");
    this.props.navigation.goBack();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.btnBack}>
          <TouchableOpacity 
            activeOpacity={0.9} 
            onPress={() => this.props.navigation.goBack()}>
            <Ionicons name={`md-arrow-back`} size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{'Заполните поля'}</Text>
        </View>
        <ScrollView>
          <View style={styles.form}>
            <View style={styles.line}>
              <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                placeholder={'Заголовок объявления'}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={[styles.inputText, styles.multiline]}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                placeholder={'Описание животного'}
              />
            </View>
            <View style={styles.line}>
              <Image
                resizeMode={'center'}
                style={{width: '100%', height: 220}}
                source={this.state.imageSource}
              />
            </View>
            <View style={styles.line}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.getImageBtn} 
                onPress={() => this.openImageLibrary()}>
                <Text style={styles.getImageText}>{'Загрузить фотографию'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line}>
              <TextInput
                style={[styles.inputText, styles.multiline]}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                placeholder={'Где потерялась'}
              />
            </View>
            <View style={styles.line}>
              <TextInput
                style={[styles.inputText, styles.multiline]}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                placeholder={'Где видели в последний раз'}
              />
            </View>
            <View style={styles.line}>
              <Button
                title="Создать объявление" 
                onPress={this.postCreated} />
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
  multiline: {
    height: 100
  },
  getImageBtn: {
    padding: 10,
    borderColor: '#414142',
    borderWidth: 1,
    backgroundColor: '#ff7961'
  },
  getImageText: {
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 18,
  }
});
