import {View, Text, ScrollView, FlatList, Dimensions} from 'react-native';
import React from 'react';

import FlashCard from '../components/FlashCard';
import FolderCard from '../components/FolderCard';
import AddButton from '../components/AddButton';

import Folder from '../db/FolderSchema';

import Realm from 'realm';
import {createRealmContext} from '@realm/react';

const realmConfig = {
  schema: [Folder],
};

const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

const HomeScreenContent = () => {
  const realm = useRealm();
  // const folders = useQuery(Folder);
  const folders = [
    {folder_name: 'Set 1', set_count: 3},
    {folder_name: 'Set 2', set_count: 31},
    {folder_name: 'Set 3', set_count: 11},
  ];

  const addFolder = folder_name => {
    realm.write(() => {
      realm.create('Folder', {
        folder_name: folder_name,
        _id: new Realm.BSON.ObjectId(),
      });
    });
  };
  const meaning = `1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you haah hahh aahaha\n\n1\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n1. Hello everyone how are you\n\n2. Hello everyone how are you. Hello everyone how are you`;
  return (
    <>
      {/* <FlashCard
        word="haha"
        meaning="a cathartic response when in a happy state"
        style={{margin: 10}}
      /> */}

      {/* <FolderCard folderName={'Let '} setCount={'100'} style={{margin: 10}} /> */}

      {/* <FlatList
        style={{backgroundColor: '#0a092d'}}
        data={folders}
        renderItem={item => (
          <FolderCard
            folderName={item.item.folder_name}
            setCount={item.item.set_count}
            style={{margin: 10}}
          />
        )}
      /> */}
      <View
        style={{backgroundColor: '#0a092d', flex: 1, justifyContent: 'center'}}>
        {/* <FlashCard
          word="haha"
          meaning={meaning}
          // meaning="1. Hello everyone how"
          // meaning={`1. Hello everyone how is everyone doing tonight lets talk`}
          cardSize="Full"
          cardStyle={{
            margin: 5,
            alignSelf: 'center',
          }}
          imageUri={
            'https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif'
          }
        /> */}

        <FlashCard
          word="haha"
          meaning={meaning}
          cardSize="Full"
          cardStyle={{
            margin: 5,
            alignSelf: 'center',
          }}
          imageUri={"https://i.gifer.com/XOsX.gif"}
        />

        {/* <FlashCard
          word="haha"
          meaning={meaning}
          cardSize="Full"
          cardStyle={{
            borderRadius: 15,
            margin: 5,
            alignSelf: 'center',
          }}
          imageUri={"https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif-1.gif"}
        /> */}
      </View>
      {/* <AddButton
        style={{bottom: '2%', right: '5%'}}
        onPressFunction={() => console.log('Set 2')}
      /> */}
      {/* <AddButton
        style={{bottom: '2%', right: '5%'}}
        onPressFunction={() => addFolder('Set 2')}
      /> */}
    </>
  );
};

function HomeScreen() {
  return (
    <RealmProvider>
      <HomeScreenContent />
    </RealmProvider>
  );
}

export default HomeScreen;
