import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const FormInput = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        autoFocus={props.autoFocus || null}
        style={[styles.text, props.textStyle]}
        placeholder={props.placeholder || 'First Name'}
        keyboardType={props.keyboardType || 'default'}
        maxLength={props.maxLength || null}
        defaultValue={props.defaultValue || null}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={(text) => props.eventHandler(text) || null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 48,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1.5,
    borderColor: '#e5e5e5',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '500',
    color: '#313131',
    fontSize: 14,
  }
});

export default FormInput;
