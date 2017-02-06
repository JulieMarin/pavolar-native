// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ComingSoonTabStyle'

export default class ComingSoonTab extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>ComingSoonTab Component</Text>
      </View>
    )
  }
}

// // Prop type warnings
// ComingSoonTab.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ComingSoonTab.defaultProps = {
//   someSetting: false
// }
