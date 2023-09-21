import {FlatList, View, Text} from 'react-native';
import React from 'react';
import SetCard from '../components/SetCard';

const DATA = [
  {name: 'Set 1'},
  {name: 'Set 2'},
  {name: 'Set 3'},
  {name: 'Set 4'},
  {name: 'Set 5'},
  {name: 'Set 6'},
];

const SetsScreen = ({navigation}) => {
  return (
    <FlatList
      data={DATA}
      style={{backgroundColor: '#0a092d'}}
      renderItem={item => (
        <SetCard
        cardOnPress={()=>navigation.navigate('Learn Flashcards')}
          style={{
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            borderColor: '#303854',
            margin: 10,
          }}
          setName={item.item.name}
          termCount={30}
        />
      )}
    />
  );
};

export default SetsScreen;
