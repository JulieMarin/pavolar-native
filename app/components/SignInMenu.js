import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RowLayout, ColumnLayout, CustomButton } from './common' ;
import Icon from './Icon';
import CustomText from './CustomText';
import FormInput from './FormInput';
import { loginUser, authUser } from '../actions';

class SignInMenu extends Component {
  handleTouch() {
    const params = {
      adults: 1,
      appID: 'NGUZ1NKZ69593J3L5AEXY30EEE07TXOBA5EXS93J',
      emailAddress: 'ali@alihamze.com',
      password: 'test',
      children: 0,
      departCode1: 'NYC',
      departCode2: 'SAL',
      departDate1: '08/01/2017',
      departDate2: '08/05/2015',
      destinationCode1: 'SAL',
      destinationCode2: 'NYC',
      infants: 0,
      maxRecommendations: 2,
      segments: 2,
    }
    this.props.authUser(params);
  }

  handleTextChange(text) {

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
            // eventHandler={this.props.emailChanged.bind(this)}
            value={this.props.email}
          />
          <FormInput
            placeholder={'Password'}
            defaultValue={'Rt-K9[*"Ekjsv#=H'}
            secureTextEntry={true}
          />
          <CustomButton
            borderRadius={5}
            eventHandler={this.handleTouch.bind(this)}
          >
            <CustomText size={18} color={'#ffffff'}>LOGIN</CustomText>
          </CustomButton>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, sessionID } = auth;
  return { email, password, error, loading, sessionID };
};

export default connect(mapStateToProps, { loginUser, authUser })(SignInMenu);
