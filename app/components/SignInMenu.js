import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RowLayout, ColumnLayout } from './common' ;
import Icon from './Icon';
import CustomText from './CustomText';

class SignInMenu extends Component {
  render() {
    return (
    <View style={styles.container}>
      <RowLayout style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity>
          <Icon size={13} source={require('image!close')}/>
        </TouchableOpacity>
        <CustomText color={'#0067fa'} size={18}>
          Sign up
        </CustomText>
      </RowLayout>

      <ColumnLayout>
        <CustomText>
          SIGN IN
        </CustomText>

      </ColumnLayout>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15
  },
});

export default SignInMenu;
