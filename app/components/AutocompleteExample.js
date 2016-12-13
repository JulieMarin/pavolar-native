import Autocomplete from 'react-native-autocomplete-input';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import axios from 'axios';

class AutocompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: []
    }
  }

  handleTextChange(text) {
    this.setState({ query: text });
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=dc6zaTOxFJmzC&limit=10`)
    .then((response) => {
      this.setState({
        query: text,
        data: response.data.data
      });
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={this.state.data}
          defaultValue={this.state.query}
          onChangeText={(text) => this.handleTextChange(text)}
          placeholder="Enter Star Wars film title"
          renderItem={({ slug }) => (
            <TouchableOpacity>
              <Text style={styles.itemText}>
                {slug}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>
            Enter Title of a Star Wars movie
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  directorText: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
  },
  openingText: {
    textAlign: 'center'
  }
});

export default AutocompleteExample;
