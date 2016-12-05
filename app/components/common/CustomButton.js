import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { RowLayout } from './';
import CustomText from '../CustomText';

const CustomButton = (props) => {
  return (
    <TouchableHighlight
        style={[styles.container, props.style, {
          backgroundColor: props.backgroundColor || '#394ad6',
          borderRadius: props.borderRadius || 0,
          height: props.height || 55,
        }]}
        onPress={() => props.eventHandler()}
        underlayColor={props.underlayColor || '#0067fa'}
      >
      <View>
        <RowLayout style={{ alignItems: 'center' }}>
          {props.children}
          <CustomText
              size={ props.textSize || 18}
              color={ props.textColor || '#ffffff'}
            >
            {props.text}
          </CustomText>
        </RowLayout>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export { CustomButton };
