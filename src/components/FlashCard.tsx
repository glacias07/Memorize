import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import FullMeaningModal from './FullMeaningModal';
import MyText from './MyText';

const FlashCard = ({
  word,
  meaning,
  style,
  imageUri,
  cardWidth,
  fullscreenOnPress,
  cardSize='Half'
}: any) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const [aspectRatio, setAspectRatio] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  

  {
    imageUri ? Image.getSize(imageUri, (w, h) => setAspectRatio(w / h)) : null;
  }

  var CARD_HEIGHT = {height: 0};
  var CARD_WIDTH = {
    width: cardWidth !== undefined ? cardWidth : SCREEN_WIDTH * 0.9,
  };
  if (cardSize == 'Full') {
    CARD_HEIGHT = {height: SCREEN_HEIGHT * 0.85};
  } else {
    CARD_HEIGHT = {height: SCREEN_HEIGHT * 0.35};
  }

  const CardContent = () => {
    return (
      <>
        <Animated.View
          style={[Styles.front, rStyle, style, CARD_WIDTH, CARD_HEIGHT]}>
          <MyText
            content={word}
            fontWeight={500}
            fontSize={24}
            fontColor="white"
          />
          {cardSize === 'Half' ? (
            <TouchableOpacity
              onPress={fullscreenOnPress}
              style={{position: 'absolute', bottom: 10, right: 10, zIndex: 2}}>
              <Image
                tintColor={'white'}
                style={{height: '100%', aspectRatio: 1}}
                source={require('../assets/images/fullscreen.png')}
              />
            </TouchableOpacity>
          ) : null}
        </Animated.View>
        <Animated.View
          style={[Styles.back, bStyle, style, CARD_WIDTH, CARD_HEIGHT]}>
          {cardSize === 'Full' ? <FullCardContent /> : <HalfCardContent />}
        </Animated.View>
      </>
    );
  };

  const HalfCardContent = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 2}}>
          <MyText
            fontWeight={400}
            fontSize={18}
            fontColor={'white'}
            content={meaning}
            numberOfLines={7}
            style={{textAlignVertical: 'center', flex: 1}}
          />
        </View>
        {imageUri ? (
          <Image
            style={{flex: 1, aspectRatio: aspectRatio}}
            source={{uri: imageUri}}
          />
        ) : null}
      </View>
    );
  };

  const FullCardContent = () => {
    return (
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
          <MyText
            content={meaning}
            numberOfLines={17}
            onLongPress={() => setModalVisible(!modalVisible)}
            onPress={() => (
              (spin.value = spin.value ? 0 : 1),
              setCardIsFlipped(!cardIsFlipped)
            )}
            disabled={!cardIsFlipped}
            fontWeight={400}
            fontSize={16}
            fontColor="white"
            style={{textAlignVertical: 'center', flex: 1}}
          />
        </View>
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
      <CardContent />
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
    zIndex: 1,
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
    flex: 1,
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
