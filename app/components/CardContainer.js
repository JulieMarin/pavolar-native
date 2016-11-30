import React from 'react';
import { View, StyleSheet } from 'react-native';


const CardContainer = (props) => {
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 14,
    backgroundColor: '#ffffff'
  }
});

const { containerStyle } = styles;

export default CardContainer;
