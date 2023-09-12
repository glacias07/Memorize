import {View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import SetCard from '../components/SetCard';
import UsernameLabel from '../components/UsernameLabel';
import MyText from '../components/MyText';

const DATA = [
  {name: 'Set 1'},
  {name: 'Set 2'},
  {name: 'Set 3'},
  {name: 'Set 4'},
  {name: 'Set 5'},
  {name: 'Set 6'},
];

const FolderSetScreen = ({route}) => {
  const NoSetsPresent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyText
          content={'Add new sets now'}
          style={{textAlignVertical: 'center'}}
        />
        <TouchableOpacity
          onPress={() => console.log('Function to add a new set')}
          style={{
            backgroundColor: '#303854',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <MyText content="add" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View style={{backgroundColor: '#303854', padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <MyText
            content={route.params.setcount + ' sets'}
            fontColor="#dadde7"
            fontSize={16}
            fontWeight={700}
          />
          <MyText
            content={'|'}
            fontColor="#292e3d"
            fontSize={26}
            fontWeight={700}
            style={{marginHorizontal: 12}}
          />
          <UsernameLabel size={6} />
        </View>
        <MyText
          fontColor="white"
          fontSize={28}
          content={route.params.foldername}
          fontWeight={900}
        />
      </View>
      <FlatList
        contentContainerStyle={{
          backgroundColor: '#0a092b',
          flex: DATA.length === 0 ? 1 : undefined,
        }}
        style={{backgroundColor: '#0a092b'}}
        data={DATA}
        renderItem={item => (
          <SetCard
            setName={item.item.name}
            termCount={30}
            style={{
              marginHorizontal: 20,
              marginTop: item.index === 0 ? 20 : 10,
              marginBottom: item.index === DATA.length - 1 ? 20 : 10,
            }}
          />
        )}
        ListEmptyComponent={<NoSetsPresent />}
      />
    </>
  );
};

export default FolderSetScreen;
