import {View, Image} from 'react-native';
import React from 'react';
import MyText from './MyText';

const UsernameLabel = ({style}) => {
  return (
    <View style={[Styles.containerStyle, style]}>
      <Image
        style={Styles.profilePhotoStyle}
        source={require('../assets/images/profilepic.jpg')}
      />
      <MyText
        fontColor="white"
        fontWeight={700}
        fontSize={14}
        content={'Shriyans_Naik'}
      />
    </View>
  );
};

export default UsernameLabel;

const Styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhotoStyle: {
    height: 30,
    width: 30,
    marginRight: 7,
    borderRadius: 75,
  },
};
