import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { RowLayout, ColumnLayout, CustomButton } from './common' ;
import Icon from './Icon';
import CustomText from './CustomText';
import FormInput from './FormInput';
import {
  loginUser,
  authUser,
  toggleSignInMenu
} from '../actions';

class SignInMenu extends Component {
  handleTouch() {
    const params = {
      appID: 'NGUZ1NKZ69593J3L5AEXY30EEE07TXOBA5EXS93J',
      emailAddress: 'ali@alihamze.com',
      password: 'test',
    }
    this.props.authUser(params);
  }

  handleTextChange() {

  }

  loginSpinner() {
    if (this.props.loading) {
      return (
        <ActivityIndicator
          animating={true}
          size={'small'}
          color={'#ffffff'}
        />
      )
    }
    return (
      <CustomText size={18} color={'#ffffff'}>LOGIN</CustomText>
    )
  }

  render() {
    const {
      email,
      password,
      statusMessage,
      loading,
      sessionID,
      signInOpen,
      toggleSignInMenu
    } = this.props;

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RowLayout style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => toggleSignInMenu()}>
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

      <ScrollView
        style={{ flex: 1 }}
      >
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
            {this.loginSpinner()}
          </CustomButton>
          <CustomText size={14} color={'#3142d0'} style={styles.forgotPassword}>
            Forgot Password
          </CustomText>
          <CustomText size={14} color={'#e20000'} style={styles.forgotPassword}>
            {this.props.statusMessage}
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
  const {
    email,
    password,
    statusMessage,
    loading,
    sessionID,
    signInOpen
  } = auth;

  return {
    email,
    password,
    statusMessage,
    loading,
    sessionID,
    signInOpen
  };
};

export default connect(
  mapStateToProps, {
    loginUser,
    authUser,
    toggleSignInMenu
  })(SignInMenu);
