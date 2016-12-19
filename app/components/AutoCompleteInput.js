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
    this.cullAirlineSearchResults = this.props.cullAirlineSearchResults
    this.stringRefs = this.props.stringRefs,
    this.updateLocation = this.props.updateFormOption;
    this.updateAirportCode = this.props.updateFormOption;
    this.clearSearchData = this.props.updateFormOption;
  }

  handleTextChange(text) {
    if (text.length >= 2) {
      this.updateLocation({ prop: this.stringRefs.airportLocation, value: text });
      this.cullAirlineSearchResults(this.stringRefs.data, text)
    }
    this.updateLocation({ prop: this.stringRefs.airportLocation, value: "" });
    this.clearSearchData({ prop: this.stringRefs.data, value: [] });
  }

  selectSuggestion(selection) {
    dismissKeyboard();
    this.updateAirportCode({ prop: this.stringRefs.airportCode, value: extractAirportCode(selection)[1] });
    this.updateLocation({ prop: this.stringRefs.airportLocation, value: extractCity(selection)[1] });
    this.clearSearchData({ prop: this.stringRefs.data, value: [] });
  }

  render() {
    const {
      dataContainer,
      defaultInputValue,
      placeholder,
    } = this.props;

    return (
      <View style={styles.container}>
        <Autocomplete
          style={styles.text}
          autoCapitalize={"none"}
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
    alignSelf: 'stretch',
  },
  autocompleteContainer: {
    marginLeft: 4,
    marginRight: 4,
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
    fontWeight: '500',
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
