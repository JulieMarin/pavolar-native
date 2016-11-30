import React from 'react';
import { View } from 'react-native';

/** Style Components
 * We can make a "style" component to organize our larger sets of styles.
 * Other components can then be passed in (and are props of the parent).
 * This allows you to to apply styles to whatever container you pass in
*/

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, heiht: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    /** elevation
     * Functions similarly to z-index
     */
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
