import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Assets from '../images/Assets';
import Icon from './Icon';

const SideMenuButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.customAction('navOff')}>
      <View style={styles.container}>
        <Icon
          style={{ alignSelf: 'center' }}
          size={18}
          source={Assets.menuOpen}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30
  }
});

export default SideMenuButton;
