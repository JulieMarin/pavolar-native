import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

const Button = ({
    onPress,
    backgroundColor,
    text,
    borderColor,
    borderWidth,
    width,
    underlayColor
}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[buttonStyle, { backgroundColor, borderColor, borderWidth, width }]}
      underlayColor={underlayColor}
    >
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 2,
    marginLeft: 3,
    marginRight: 3,
    padding: 3,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
