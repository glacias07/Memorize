import {View, Text, Animated} from 'react-native';
import {React, useEffect, useRef} from 'react';

export default function IndexCircle({color = '#00000050', smaller = 0, style}) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(progress, {toValue: 1, useNativeDriver: false}).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 11 - smaller,
          aspectRatio: 1,
          backgroundColor: color,
          borderRadius: 75,
          marginHorizontal: 2,
          // opacity: progress,
        },
        style,
      ]}></Animated.View>
  );
}
