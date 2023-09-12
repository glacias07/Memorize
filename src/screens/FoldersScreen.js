import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import MyText from '../components/MyText';
import FolderCard from '../components/FolderCard';

const DATA = [
  {name: 'GREGMAT 32 sets'},
  {name: 'Shriyans daily vocab'},
  {name: 'GRE important words'},
  {name: 'GRE synonyms'},
];

const FoldersScreen = () => {
  return (
    <FlatList
      style={{backgroundColor: '#0a092d'}}
      data={DATA}
      renderItem={item => (
        <FolderCard style={{margin: 10}} folderName={item.item.name} />
      )}
    />
  );
};

export default FoldersScreen;
