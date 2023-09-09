import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import FullMeaningModal from './FullMeaningModal';

const FlashCard = ({word, meaning, cardStyle, imageUri, cardSize}: any) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const [aspectRatio, setAspectRatio] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  {
    imageUri ? Image.getSize(imageUri, (w, h) => setAspectRatio(w / h)) : null;
  }

  var CARD_HEIGHT = {height: 0};
  var CARD_WIDTH = {width: 0};
  if (cardSize == 'Full') {
    CARD_HEIGHT = {height: SCREEN_HEIGHT * 0.85};
    CARD_WIDTH = {width: SCREEN_WIDTH * 0.9};
  } else {
    CARD_HEIGHT = {height: SCREEN_HEIGHT * 0.35};
    CARD_WIDTH = {width: SCREEN_WIDTH * 0.9};
  }

  const HalfCard = () => {
    return (
      <View>
        <Animated.View
          style={[Styles.front, rStyle, cardStyle, CARD_WIDTH, CARD_HEIGHT]}>
          <Text style={Styles.word}>{word}</Text>
        </Animated.View>
        <Animated.View
          style={[Styles.back, bStyle, cardStyle, CARD_WIDTH, CARD_HEIGHT]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 2}}>
              <Text numberOfLines={7} style={Styles.meaningHalf}>
                {meaning}
              </Text>
            </View>
            {imageUri ? (
              <Image
                style={{flex: 1, aspectRatio: aspectRatio}}
                source={{uri: imageUri}}
              />
            ) : null}
          </View>
        </Animated.View>
      </View>
    );
  };

  const FullCard = () => {
    return (
      <View>
        <Animated.View
          style={[Styles.front, rStyle, cardStyle, CARD_WIDTH, CARD_HEIGHT]}>
          <Text style={Styles.word}>{word}</Text>
        </Animated.View>
        <Animated.View
          style={[Styles.back, bStyle, cardStyle, CARD_WIDTH, CARD_HEIGHT]}>
          <View style={{flex: 1}}>
            {imageUri ? (
              <Image
                style={{
                  flex: 1,
                  aspectRatio: aspectRatio,
                  marginBottom: 50,
                  alignSelf: 'center',
                }}
                source={{uri: imageUri}}
              />
            ) : null}
            <View style={{flex: 2}}>
              <Text
                onLongPress={() => setModalVisible(!modalVisible)}
                onPress={() => (
                  (spin.value = spin.value ? 0 : 1),
                  setCardIsFlipped(!cardIsFlipped)
                )}
                disabled={!cardIsFlipped}
                // minimumFontScale={0.75}
                // adjustsFontSizeToFit={true}
                numberOfLines={17}
                style={Styles.meaningFull}>
                {meaning}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  };

  const [cardIsFlipped, setCardIsFlipped] = useState(false);
  const spin = useSharedValue<number>(0);

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return cardSize === 'Full'
      ? {
          transform: [
            {
              rotateY: withTiming(`${spinVal}deg`, {duration: 200}),
            },
          ],
        }
      : {
          transform: [
            {
              rotateX: withTiming(`${spinVal}deg`, {duration: 200}),
            },
          ],
        };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);

    return cardSize === 'Full'
      ? {
          transform: [
            {
              rotateY: withTiming(`${spinVal}deg`, {duration: 200}),
            },
          ],
        }
      : {
          transform: [
            {
              rotateX: withTiming(`${spinVal}deg`, {duration: 200}),
            },
          ],
        };
  }, []);

  return (
    <Pressable
      onPress={() => (
        (spin.value = spin.value ? 0 : 1), setCardIsFlipped(!cardIsFlipped)
      )}>
      {cardSize === 'Full' ? <FullCard /> : <HalfCard />}
      <FullMeaningModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        meaning={meaning}
      />
    </Pressable>
  );
};

export default FlashCard;

const Styles = StyleSheet.create({
  front: {
    backgroundColor: '#2e3856',
    borderRadius: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    padding: 10,
  },
  back: {
    backgroundColor: '#2e3856',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    padding: 20,
  },
  word: {
    color: 'white',
    fontWeight: '500',
    fontSize: 24,
  },
  meaningFull: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    textAlignVertical: 'center',
    flex: 1
  },
  meaningHalf: {
    color: 'white',
    fontWeight: '400',
    fontSize: 18,
    textAlignVertical: 'center',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
