import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import FlashCard from '../components/FlashCard';
import FolderCard from '../components/FolderCard';
import AddButton from '../components/AddButton';

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={{backgroundColor: '#0a092d', flex: 1}}>
        {/* <FlashCard
        word="haha"
        meaning="a cathartic response when in a happy state"
        style={{margin: 10}}
      /> */}
        <FolderCard
          folderName={
            'Let us see if this big chuck of text can fit inside this small folder size with the new property we have applied to our self made reusable component '
          }
          setCount={'100'}
          style={{margin: 10}}
        />
        <FolderCard
          folderName={"Hello world"
          }
          setCount={'100'}
          style={{margin: 10}}
        />
      </ScrollView>
      <AddButton
        style={{bottom: '2%', right: '5%'}}
        onPressFunction={() => console.log('haha')}
      />
    </>
  );
}
