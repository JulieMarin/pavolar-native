import Autocomplete from 'react-native-autocomplete-input';
import Overlay from 'react-native-overlay';
import dismissKeyboard from 'dismissKeyboard';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import axios from 'axios';

class AutoCompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: '',
      query: '',
      data: []
    }
  }

  handleTextChange(text) {
    this.setState({ query: text });
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=dc6zaTOxFJmzC&limit=5`)
    .then((response) => {
      this.setState({
        query: text,
        data: response.data.data
      });
    })
  }

  selectSuggestion(slug) {
    dismissKeyboard();
    this.setState({ picked: slug })
  }

  render() {

    return (
      <View style={styles.container}>
        <Autocomplete
          style={styles.text}
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          inputContainerStyle={styles.input}
          data={this.state.data}
          defaultValue={this.state.picked}
          onChangeText={(text) => this.handleTextChange(text)}
          placeholder="GOING TO"
          listStyle={styles.results}
          renderItem={({ slug }) => (
            <TouchableOpacity onPress={() => this.selectSuggestion(slug) }>
              <Text style={styles.itemText}>
                {slug}
              </Text>
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
    fontSize: 15,
    margin: 2
  },
  results: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    // borderWidth: 0,
  },
  text: {
    height: 35,
    fontSize: 16
  }
});

export default AutoCompleteInput;
