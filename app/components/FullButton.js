import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { RowLayout } from './common';
import CustomText from './CustomText';
import Icon from './Icon';

const FullButton = (props) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, props.style]}>
        <RowLayout style={{ justifyContent: 'space-between', alignItems: 'center' }}>

          <RowLayout style={{ alignItems: 'center' }}>
            <Icon
              size={22}
              style={styles.icon}
              source={props.source}
            />
            <CustomText color={'#ffffff'} size={16} fontWeight={'600'}>
              {props.text}
            </CustomText>
          </RowLayout>

          <View style={styles.radial} />
        </RowLayout>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1066cb',
    padding: 22,
    paddingLeft: 25,
    paddingRight: 25,
  },
  icon: {
    marginRight: 22
  },
  radial: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 100,
  }
});

export default FullButton;
