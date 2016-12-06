import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RowLayout, ColumnLayout, CustomButton } from './common' ;
import Icon from './Icon';
import CustomText from './CustomText';
import FormInput from './FormInput';
import axios from 'axios';
import CryptoJS from "crypto-js";

class SignInMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signature: ''
    }
  }

  handleTouch() {
    const params = {
      // adults: 1,
      appID: 'NGUZ1NKZ69593J3L5AEXY30EEE07TXOBA5EXS93J',
      username: 'ali@alimze.com',
      nonce: '98093123495451',
      password: 'Rt-K9[*"Ekjsv#=H',
      // children: 0,
      // departCode1: 'NYC',
      // departCode2: 'SAL',
      // departDate1: '08/01/2017',
      // departDate2: '08/05/2015',
      // destinationCode1: 'SAL',
      // destinationCode2: 'NYC',
      // infants: 0,
      // maxRecommendations: 2,
      // segments: 2,
    }

    function customEncodeURIComponent(URI) {
      return encodeURIComponent(URI).replace(/'/g, "%27");
    }

    const signature = [];
    Object.keys(params).forEach(function(key) {
      signature.push(key + '=' + customEncodeURIComponent(params[key]));
    })

    params.signature = btoa(CryptoJS.HmacSHA1(signature.join('&'), 'SZM5K3BNRNDRW4CSY3TQHFHKZN2R52IHLSQUP53O'));

    btoa(CryptoJS.HmacSHA1(signature.join('&'), '2AQBS1JYX4'));

    axios.get('https://api.pavolar.com/1/user/authenticate/account.json', {
      params: params
    })
    .then(function (response) {
     console.log(response);
   })
   .catch(function (error) {
     console.log(error);
   });
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
            defaultValue={'ali@alihamze.com'}
          />
          <FormInput
            placeholder={'Password'}
            defaultValue={'Rt-K9[*"Ekjsv#=H'}
            secureTextEntry={true}
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
