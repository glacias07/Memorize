import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import UsernameLabel from './UsernameLabel';
import MyText from './MyText';

const FolderCard = ({folderOnPress, folderName, style, setCount}) => {
  return (
    <TouchableOpacity
      onPress={folderOnPress}
      style={[Styles.containerStyle, style]}>
      <Image
        tintColor={'white'}
        style={Styles.iconStyle}
        source={require('../assets/images/folder.png')}
      />

      <MyText
        content={folderName}
        fontColor="white"
        fontWeight={900}
        fontSize={17}
      />
      <UsernameLabel style={Styles.usernameLabelStyle} />
    </TouchableOpacity>
  );
};

export default FolderCard;

const Styles = {
  containerStyle: {
    padding: 10,
    borderWidth: 2.5,
    borderColor: '#303854',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  iconStyle: {
    height: 25,
    width: 25,
    marginBottom: 10,
  },
  usernameLabelStyle: {
    marginTop: 20,
  },
};
