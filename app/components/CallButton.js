import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import Icon from './Icon';


const CallButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => Communications.phonecall('1-800-728-6527', true)}
      >
        <Icon style={styles.icon} source={require('image!phone')} />
        <Text style={styles.text}>1-855-PAVOLAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 85,
  },
  text: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 22,
    fontWeight: '500',
    color: '#d70d15',
    marginBottom: 4,
  },
  icon: {
    marginRight: 20
  }
});

export default CallButton;
