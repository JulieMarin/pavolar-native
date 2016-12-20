import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const CloseButton = (props) => {
  return (
    <View style={props.style}>
      <TouchableOpacity onPress={() => props.onButtonPress()}>
        <Image
          source={require('image!close')}
          resizeMode={'contain'}
          style={styles.container}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20
  }
});

export { CloseButton };
