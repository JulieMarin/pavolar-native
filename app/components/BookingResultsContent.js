import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColumnContainer from './ColumnContainer';
import RowWrapper from './RowWrapper';

const BookingResultsContent = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <Text>Round Trip</Text>
        <Text>$800</Text>
      </View>
      <RowWrapper>

        <ColumnContainer>
          <Text>Fart</Text>
        </ColumnContainer>

        <ColumnContainer>
          <Text>Fart</Text>
          <Text>Fart</Text>
        </ColumnContainer>

        <ColumnContainer>
          <Text>Fart</Text>
        </ColumnContainer>

        <ColumnContainer>
          <Text>Fart</Text>
        </ColumnContainer>

      </RowWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#f5f2f2',
    borderBottomWidth: 1,
    paddingBottom: 14,
  },
  blueText: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 12,
    color: '#3f40aa',
  }
});

export default BookingResultsContent;
