import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddButton({style, onPressFunction}) {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={[
        {
          // borderColor: 'red',
          // borderWidth: 3,
          borderRadius: 75,
          // alignSelf: 'stretch',
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: "#1DA1F2",
        },
        style,
      ]}>
      <Image
        source={require('../assets/images/add.png')}
        style={{tintColor: 'white'}}
      />
    </TouchableOpacity>
  );
}
