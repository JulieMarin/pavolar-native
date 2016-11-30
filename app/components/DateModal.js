import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

class DateModal extends Component {
  constructor(props) {
    super(props)
    // set state with passed in props
    this.state = {
      message: props.error,
      hide: props.hide,
    }
    // bind functions
    this.dismissModal = this.dismissModal.bind(this)
  }

  dismissModal() {
    this.setState({hide: true})
  }

  // show or hide Modal based on 'hide' prop
  render() {
    if(this.state.hide){
      return (
        <View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight onPress={this.dismissModal}>
            <Text>{this.state.message}</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500
  }
});

export default DateModal;
