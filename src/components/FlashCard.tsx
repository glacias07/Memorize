import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const FlashCard = ({word,meaning,style}:any) => {
  const spin = useSharedValue<number>(0);

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  return (      
      <Pressable
        onPress={() => (spin.value = spin.value ? 0 : 1)}
        style = {style}
      >
        <View>
        <Animated.View style={[Styles.front, rStyle]}>
          <Text style={Styles.word}>{word}</Text>
        </Animated.View>
        <Animated.View style={[Styles.back, bStyle]}>
          <Text style = {Styles.meaning}>{meaning}</Text>
        </Animated.View>
      </View>
      </Pressable>
  );
};

export default FlashCard;

const Styles = StyleSheet.create({
  front: {
    height: "100%", width: "100%",
    backgroundColor: "#D8D9CF",
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  back: {
    height: "100%", width: "100%",
    backgroundColor: "#FF8787",
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  word:{
    color: "black",
    fontWeight: "500",
    fontSize: 24
  },
  meaning:{
    color: "black",
    fontWeight: "500",
    fontSize: 24
  }
});