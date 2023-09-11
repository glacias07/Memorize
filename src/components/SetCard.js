import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MyText from './MyText';
import UsernameLabel from './UsernameLabel';

const SetCard = ({cardOnPress, setName, termCount, style}) => {
  return (
    <TouchableOpacity
      style={[Styles.containerStyle, style]}
      onPress={cardOnPress}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
        <View>
          <MyText
            fontColor="white"
            fontWeight={900}
            fontSize={18}
            content={setName}
          />
          <MyText
            fontColor="#dadde7"
            fontWeight={500}
            fontSize={16}
            content={termCount + ' terms'}
          />
        </View>
        <Image
          style={{height: 70, width: 70}}
          source={require('../assets/images/profilepic.jpg')} //ADD THUMBNAIl
        />
      </View>
      <UsernameLabel style={Styles.usernameLabelStyle} />
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
    marginTop: 20,
  },
};
