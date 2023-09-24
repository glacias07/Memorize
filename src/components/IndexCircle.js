import {View} from 'react-native';
import React from 'react';

export default function IndexCircle({color = '#00000050', smaller = 0, style}) {
  return (
    <View
      style={[
        {
          height: 11 - smaller,
          aspectRatio: 1,
          backgroundColor: color,
          borderRadius: 75,
          marginHorizontal: 2,
        },
        style,
      ]}></View>
  );
}
