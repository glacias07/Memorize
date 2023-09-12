import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MyText from './MyText';
import UsernameLabel from './UsernameLabel';

const SetCard = ({cardOnPress, setName, termCount, style}) => {
  return (
    <TouchableOpacity
      style={[Styles.containerStyle, style]}
      onPress={cardOnPress}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <MyText
            fontColor="white"
            fontWeight={900}
            fontSize={18}
            content={setName}
          />
          <MyText
            fontColor="#dadde7"
            fontWeight={700}
            fontSize={16}
            content={termCount + ' terms'}
          />
        </View>
        <Image
          style={{height: 60, width: 60}}
          source={require('../assets/images/profilepic.jpg')} //ADD THUMBNAIL to schema
        />
      </View>
      <UsernameLabel size={-1} style={Styles.usernameLabelStyle} />
    </TouchableOpacity>
  );
};

export default SetCard;

const Styles = {
  containerStyle: {
    backgroundColor: '#2e3856',
    padding: 20,
    borderRadius: 10,
  },
  usernameLabelStyle: {
    marginTop: 15,
  },
};
