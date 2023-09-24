import {
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {React, useRef, useState, useEffect} from 'react';
import FlashCard from '../components/FlashCard';
import IndexCircle from '../components/IndexCircle';

const DATA = [
  {
    term: 'Nice',
    meaning:
      '1. Being kind and caring\n\n2. A fool who always gets the end of the stick',
  },
  {term: 'Awesome', meaning: 'Unbelievably good'},
  {term: 'Cold', meaning: 'Having a cold sensation'},
  {term: 'May', meaning: 'A month of summer'},
  {term: '1', meaning: 'Unbelievably good'},
  {term: '2', meaning: 'Having a cold sensation'},
  {term: '3', meaning: 'A month of summer'},
  {term: '4', meaning: 'Unbelievably good'},
  {term: '5', meaning: 'Having a cold sensation'},
  {term: '6', meaning: 'A month of summer'},
];
const LearnFlashcardsScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const CARD_WIDTH = SCREEN_WIDTH * 0.9;
  const SPACING = 20;
  const [activeIndexNumber, setActiveIndexNumber] = useState(Number); //this state will hold our active index


  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={DATA}
        renderItem={item => (
          <>
            <FlashCard
              word={item.item.term}
              meaning={item.item.meaning}
              style={{margin: SPACING}}
              cardWidth={CARD_WIDTH}
              fullscreenOnPress={() =>
                navigation.navigate('Learn Flashcards Fullscreen')
              }
            />
          </>
        )}
        horizontal
        snapToInterval={CARD_WIDTH + 2 * SPACING}
        disableIntervalMomentum
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          let slide = Math.round(
            e.nativeEvent.contentOffset.x,
            e.nativeEvent.layoutMeasurement.width,
          );
          if (slide !== activeIndexNumber) {
            setActiveIndexNumber(Math.ceil(slide / Math.round(SCREEN_WIDTH))); //here we will set our active index num
          }
        }}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {DATA.slice(0, activeIndexNumber + 3).map((item, index) => {
          return Math.abs(activeIndexNumber - index) < 3 ? (
            <IndexCircle
              key={index}
              color={index === activeIndexNumber ? 'blue' : undefined}
              smaller={
                index === activeIndexNumber
                  ? 0
                  : Math.abs(activeIndexNumber - index) * 3
              }
            />
          ) : null;
        })}
      </View>
    </View>
  );
};

export default LearnFlashcardsScreen;

const style = {
  imageContainer: {
    borderWidth: 1,
    width: 190,
    aspectRatio: 1,
    borderRadius: 4,
    borderColor: '#000',
    alignSelf: 'center',
    position: 'relative',
    margin: 0,
    padding: 0,
  },
  imagesStyle: {
    aspectRatio: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'center',
    margin: 0,
    padding: 0,
  },
  dotContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // zIndex: 8,
    // elevation: 8,
    // position: 'absolute',
    // alignSelf: 'center',
    // bottom: 20,
  },
  dot: {
    aspectRatio: 3,
    width: 18,
    marginHorizontal: 2,
    marginVertical: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'yellow',
    position: 'relative',
    zIndex: 8,
    elevation: 8,
  },
};

// <IndexCircle
//   key={index}
//   color={index === activeIndexNumber ? 'blue' : undefined}
//   smaller={
//     index === activeIndexNumber
//       ? 0
//       : Math.abs(activeIndexNumber - index) * 3
//   }
//   style={{}}
// />
