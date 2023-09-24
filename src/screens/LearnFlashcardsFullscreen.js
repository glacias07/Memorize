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

export default function LearnFlashcardsFullscreen({navigation}) {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const CARD_WIDTH = SCREEN_WIDTH * 0.9;
  const SPACING = 20;
  const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

  return (
    <View>
      <View style={{backgroundColor: 'yellow',}}>{/* header */}</View>
      <FlatList
      style={{backgroundColor: 'red',}}
        data={DATA}
        renderItem={item => (
          <>
            <FlashCard
              word={item.item.term}
              meaning={item.item.meaning}
              style={{margin: SPACING}}
              cardWidth={CARD_WIDTH}
              cardSize={'Full'}
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
    </View>
  );
}
