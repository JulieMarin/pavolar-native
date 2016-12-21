import Autocomplete from 'react-native-autocomplete-input';
import dismissKeyboard from 'dismissKeyboard';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { extractCity, extractAirportCode } from '../services';

class AutoCompleteInput extends Component{
  constructor(props) {
    super(props);

  }

  handleTextChange(text) {
    const {
      keyRefs,
      updateLocField,
      cullAirlineSearchResults,
      clearData
    } = this.props
    if (text.length >= 2) {
      updateLocField({
        prop: keyRefs.airportLocation,
        value: text
      });
      cullAirlineSearchResults(keyRefs.data, text);
    }
    clearData({
      prop: keyRefs.data,
      value: []
    })
    updateLocField({
      prop: keyRefs.airportCode,
      value: ''
    });
  }

  selectSuggestion(selection) {
    const { keyRefs, updateLocField, clearData } = this.props;
    dismissKeyboard();
    clearData({
      prop: keyRefs.data,
      value: []
    })
    updateLocField({
      prop: keyRefs.airportCode,
      value: extractAirportCode(selection)[1]
    });
    updateLocField({
      prop: keyRefs.airportLocation,
      value: extractCity(selection)[1]
    });
  }

  render() {
    const {
      dataContainer,
      defaultInputValue,
      placeholder,
      editable
    } = this.props;

    return (
      <View style={styles.container}>
        <Autocomplete
          editable={editable}
          style={styles.text}
          placeholderTextColor={'#a3a3a3'}
          autoCapitalize={'characters'}
          selectTextOnFocus={true}
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          inputContainerStyle={styles.input}
          data={dataContainer}
          defaultValue={defaultInputValue.toUpperCase()}
          onChangeText={(text) => this.handleTextChange(text)}
          placeholder={placeholder}
          listStyle={styles.results}
          renderItem={({ name }) => (
            <TouchableOpacity onPress={() => this.selectSuggestion(name) }>
              <View style={styles.suggestion}>
                <Text style={styles.itemText}>
                  {name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignSelf: 'stretch',
  },
  autocompleteContainer: {
    // marginLeft: 4,
    // marginRight: 4,
  },
  itemText: {
    fontSize: 13,
    margin: 2,
    color: '#ffffff'
  },
  results: {
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    backgroundColor: '#0076f8'
  },
  input: {
    borderWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    height: 35,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '400',
    color: '#313131',
    fontSize: 14,
  },
  suggestion: {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingBottom: 5,
  },
});

export default AutoCompleteInput;
