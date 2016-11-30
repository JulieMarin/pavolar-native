import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SearchButton extends Component {
  handleTouch() {
    Actions.bookingSearchResults({ lol: 'test', fart: 'box' });
  }

  render() {
    return (
      <TouchableHighlight
        style={container}
        onPress={this.handleTouch}
        underlayColor={'#d6474c'}
      >
        <Text style={text}>SEARCH</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#d60d15',
    height: 58,
  },
  text: {
    color: '#fefffe',
    fontSize: 19,
    fontWeight: '300',
  }
});

const { container, text } = styles;

export default SearchButton;
