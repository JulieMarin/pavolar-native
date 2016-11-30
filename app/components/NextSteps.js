import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RowLayout, ColumnLayout, Button } from './common';
import CustomText from './CustomText';
import Icon from './Icon';
import FullButton from './FullButton';

const NextSteps = (props) => {
  return (
    <View>
      <View style={styles.container}>

        <RowLayout>

          <ColumnLayout>
            <RowLayout style={{ alignItems: 'center' }}>
              <Icon
                style={styles.icon}
                source={require('image!price_guaranted')}
                size={18}
              />
              <CustomText style={styles.text} size={12}>
                Price guaranteed after booking
              </CustomText>
            </RowLayout>
          </ColumnLayout>

          <ColumnLayout>
            <RowLayout style={{ alignItems: 'center' }}>
              <Icon
                style={styles.icon}
                source={require('image!free_cancelation')}
                size={18}
              />
              <CustomText style={styles.text} size={12}>
                Free cancellation within 24 hours!
              </CustomText>
            </RowLayout>
          </ColumnLayout>

        </RowLayout>

        <View style={styles.textSpacer}>
          <CustomText fontWeight={'700'} size={14}>
            Now please follow next steps below:
          </CustomText>
        </View>
      </View>
      <FullButton
        style={styles.buttonPadding}
        text={'TRAVELLER INFO'}
        source={require('image!travel_info')}
      />
      <FullButton
        style={styles.buttonPadding}
        text={'PAYMENT'}
        source={require('image!payment')}
      />
      <FullButton
        style={[styles.buttonPadding, { marginBottom: 15 }]}
        text={'CONFIRMATION'}
        source={require('image!confirmation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 18
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 15,
    marginRight: 25,
  },
  textSpacer: {
    justifyContent: 'flex-end',
    height: 70
  },
  buttonPadding: {
    marginBottom: 0.5,
  }
});

export default NextSteps;
