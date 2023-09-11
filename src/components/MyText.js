import {Text} from 'react-native';
import React from 'react';

const MyText = ({
  content = '(MyText component text here...)',
  fontSize = 24,
  fontWeight = 500,
  fontColor = 'white',
  style = {},
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[Styles.myTextStyle(fontWeight, fontSize, fontColor), style]}>
      {content}
    </Text>
  );
};

export default MyText;

const Styles = {
  myTextStyle: (fontWeight, fontSize, fontColor) => ({
    fontFamily: `trakya-sans-${fontWeight}`,
    fontSize: fontSize,
    color: fontColor,
  }),
};
