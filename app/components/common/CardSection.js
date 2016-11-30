import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1.5,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      /** flexDirection
       * The orientation in which flex properties are applied.
       * 'row' for horizontal and 'column' for vertical
       */
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative',
  }
};

export { CardSection };
