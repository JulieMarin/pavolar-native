import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RowLayout, ColumnLayout, CustomButton } from './common' ;
import Icon from './Icon';
import CustomText from './CustomText';
import FormInput from './FormInput';
import axios from 'axios';

class SignInMenu extends Component {
  handleTouch() {
    axios.get('https://api.pavolar.com/1/user/authenticate/account.json',{
      params: {
        username: 'ali@alihamze.com',
        password: 'Rt-K9[*"Ekjsv#=H',
        nonce: '',
        signature: '',
        appID: '',
      }
    })
    .then((response) => console.log(response))
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RowLayout style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity>
            <Icon size={13} source={require('image!close')}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <CustomText color={'#0067fa'} size={18}>
              Sign up
            </CustomText>
          </TouchableOpacity>
        </RowLayout>

        <RowLayout>
          <CustomText size={28} fontWeight={'600'} style={{ paddingBottom: 8 }}>
            SIGN IN
          </CustomText>
        </RowLayout>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <ColumnLayout>
          <FormInput
            autoFocus={true}
            placeholder={'Email'}
          />
          <FormInput
            placeholder={'Password'}
          />
          <CustomButton
            text={'LOGIN'}
            borderRadius={5}
            eventHandler={this.handleTouch.bind(this)}
          />
          <CustomText size={14} color={'#3142d0'} style={styles.forgotPassword}>
            Forgot Password
          </CustomText>
          <CustomButton
            text={'SIGN IN WITH FACEBOOK'}
            backgroundColor={'#3f40aa'}
            underlayColor={'#6264ff'}
            borderRadius={5}
            eventHandler={this.handleTouch.bind(this)}
          >
            <Icon style={{ marginRight: 8, marginBottom: 3 }} size={18} source={require('image!fb_logo')} />
          </CustomButton>
        </ColumnLayout>
      </ScrollView>
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
  forgotPassword: {
    marginTop: 12,
    marginBottom: 30
  },
  header: {
  }
});

export default SignInMenu;
