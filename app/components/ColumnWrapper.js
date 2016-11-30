import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColumnWrapper = (props) => {
  return (
    <View
      style={
        [{ alignItems: props.alignItems || 'center', flex: props.flex || 1, justifyContent: props.justifyContent || 'flex-start' }, props.style]
      }
    >
      <View
        style={
          [styles.column, { alignItems: props.alignChildren || 'center' }]
        }
      >
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  }
});

export default ColumnWrapper;
