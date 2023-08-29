import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FolderCard({folderName, style, setCount}) {
  return (
    <TouchableOpacity style={[{backgroundColor: '#2e3856'}, style]}>
      <Text
        style={{padding: 10, color: 'white', fontSize: 16, fontWeight: 500}}>
        {setCount} Sets
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Icon
          name="folder-o"
          size={30}
          color="#0CC"
          onPress={() => console.log('onPress()')}
          style={{padding: 10}}
        />
        <Text
          numberOfLines={3}
          style={{
            padding: 10,
            color: 'white',
            fontSize: 19,
            fontWeight: 600,
            width: '85%',
          }}>
          {folderName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
