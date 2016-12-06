import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import DrawerMenuButton from './DrawerMenuButton';
import CallButton from './CallButton';

class DrawerMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerMenuButton handleEvent={this.props.handleEvent} fontWeight={'700'} text={'SIGN IN'} />
        <DrawerMenuButton text={'CUSTOMER SUPPORT'} />
        <DrawerMenuButton text={'TERMS AND CONDITIONS'} />
        <CallButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
    marginLeft: 40,
    marginRight: 20,
    alignItems: 'flex-start'
  },
});

export default DrawerMenu;
