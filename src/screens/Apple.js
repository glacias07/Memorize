import 'react-native-get-random-values';

import {React, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Realm from 'realm';
import {createRealmContext} from '@realm/react';

// Define your object model
class Profile extends Realm.Object {
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
}

// Create a configuration object
const realmConfig = {
  schema: [Profile],
};

// Create a realm context
const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);

// Expose a realm
const Apple = () => {
  return (
    <RealmProvider>
      <RestOfApp />
    </RealmProvider>
  );
};

function RestOfApp() {
  // const [selectedProfileId, setSelectedProfileId] = useState(objectPrimaryKey);
  const realm = useRealm();
  const profiles = useQuery(Profile);
  const [nameOfPerson, setNameOfPerson] = useState('');

  const addProfile = name => {
    realm.write(() => {
      realm.create('Profile', {
        name: name,
        _id: new Realm.BSON.ObjectId(),
      });
    });
  };
  const queryProfiles = () => {
    console.log(profiles);
  };
  return (
    <View>
      <Text>Yo boyyyyy</Text>
      <TextInput onChangeText={val => setNameOfPerson(val)}></TextInput>
      <TouchableOpacity onPress={() => addProfile(nameOfPerson)}>
        <Text>Press me to see MAGIC!!!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => queryProfiles()}>
        <Text>Press me to see Better MAGIC!!!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Apple;
