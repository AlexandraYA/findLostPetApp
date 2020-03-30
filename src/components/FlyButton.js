
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export const FlyButton = props => {

    const { handlePress, children, btnColor } = props;

    const onPress = () => {
        handlePress();
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{
              position: 'absolute',
              flexDirection: 'column',
              justifyContent: 'center',
              right: 15,
              bottom: 30,
              width: 60, 
              height: 60,
              borderRadius: 999,
              backgroundColor: btnColor ? btnColor : '#f44334',
              elevation: 10,
              zIndex: 100
          }}
            onPress={() => onPress()}>
            <Text style={{
                    fontSize: 32,
                    textAlign: 'center',
                    color: '#000000'
                }}>{'+'}</Text>
        </TouchableOpacity>
    );
}