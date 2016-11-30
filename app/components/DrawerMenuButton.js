import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const DrawerMenuButton = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text
          style={[styles.text, { fontWeight: props.fontWeight || '500' }]}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16,
    color: '#adadad',
  }
});

export default DrawerMenuButton;
