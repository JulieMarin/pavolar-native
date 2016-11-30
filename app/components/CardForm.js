import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from './FormInput';
import CustomText from './CustomText';
import Icon from './Icon';

const CardForm = (props) => {
  return (
    <View style={styles.container}>
      <Icon source={require('image!payment_dark')} />
      <FormInput maxLength={16} keyboardType={'numeric'} placeholder={'Card number'} style={[styles.form, { flex: 1 }]} />
      <FormInput maxLength={4} keyboardType={'numeric'} placeholder={'MM/YY'} style={[styles.form, { flex: 0.5 }]} />
      <FormInput maxLength={3} keyboardType={'numeric'} placeholder={'CVC'} style={[styles.form, { flex: 0.5 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#ffffff',
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1.5,
    borderColor: '#e5e5e5',
    marginBottom: 10,
  },
  form: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 0,
    borderWidth: 0
  }
});

export default CardForm;
