import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DrawerMenuButton from './DrawerMenuButton';
import CallButton from './CallButton';

const DrawerMenu = () => {
  return (
    <View style={styles.container}>
      <DrawerMenuButton fontWeight={'700'} text={'SIGN IN'} />
      <DrawerMenuButton text={'CUSTOMER SUPPORT'} />
      <DrawerMenuButton text={'TERMS AND CONDITIONS'} />
      <CallButton />
    </View>
  );
};

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
