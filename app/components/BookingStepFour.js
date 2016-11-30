import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { RowLayout, ColumnLayout } from './common';
import CustomText from './CustomText';
import FormInput from './FormInput';
import Checkbox from './Checkbox';


class BookingStepFour extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          <View style={styles.formContainer}>
            <View style={styles.headerText}>
              <CustomText size={14} fontWeight={'600'} color={'#3e40a9'}>
                Who's travelling?
              </CustomText>

              <CustomText size={12} fontWeight={'500'} color={'#646464'}>
                Traveller names must match government-issued photo ID exactly
              </CustomText>
            </View>

            <View>
              <CustomText size={15} fontWeight={'600'}>Adult #1</CustomText>
              <FormInput autoFocus={true} />
              <FormInput />
              <FormInput />
              <RowLayout style={styles.checkboxes}>
                <RowLayout>
                  <Checkbox />
                  <CustomText style={{ paddingLeft: 10 }}>Male</CustomText>
                </RowLayout>

                <RowLayout>
                  <Checkbox checked={true} />
                  <CustomText style={{ paddingLeft: 10 }}>Female</CustomText>
                </RowLayout>
              </RowLayout>
              <FormInput />
              <RowLayout>
                <FormInput style={{ flex: 0.4, marginRight: 10 }} />
                <FormInput />
              </RowLayout>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginBottom: 250
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 20
  },
  headerText: {
    paddingBottom: 25,
  },
  checkboxes: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
    marginBottom: 10,
  }
});

export default BookingStepFour;
