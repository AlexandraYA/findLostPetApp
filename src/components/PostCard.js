
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

export const PostCard = props => {

    const { handlePress, imageSource, description, address } = props;

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => handlePress()}>
            <View style={styles.post}>
                <View style={styles.imageWrapper}>
                  <Image
                    resizeMode={'cover'}
                    style={styles.postImage}
                    source={imageSource}
                  />
                </View>
                <View style={styles.postMsg}>
                  <Text style={styles.postText}>{description}</Text>
                  <Text style={styles.postText}>{address}</Text>
                  <View style={styles.postMore}>
                    <Text style={styles.link}>{'Подробнее'}</Text>
                  </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    post: {
        width: '90%',
        flexDirection: 'row',
        height: 200,
        borderRadius: 20,
        elevation: 2,
        marginBottom: 30,
        backgroundColor: '#ffffff'
      },
      imageWrapper: {
        width: "50%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      },
      postImage: {
        width: '100%', 
        height: 200,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
      },
      postMsg: {
        width: "50%",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
      },
      postLine: {
        marginBottom: 10
      },
      postTitle: {
        lineHeight: 24,
        fontSize: 18,
        marginRight: 20,
        fontWeight: 'bold'
      },
      postText: {
        lineHeight: 24,
        fontSize: 18,
        height: 72
      },
      postMore: {
        marginTop: 10
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
