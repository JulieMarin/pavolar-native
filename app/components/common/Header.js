/** Import
 * Import libraries for making a component
 */
import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '../common';

/** Component
 * Make a component
 */
const Header = () => {
  /** ES6 Destructuring
   * ES6 destructuring syntactic sugar. So we can use 'viewStyle' instead of 'styles.viewStyle'
   */
  const { textStyle, viewStyle, logoStyle } = styles;

  return (
    /** Props
     * Components can recieve props (properties) as inline attributes. We use this to pass styles
     *  (or other objects) into components.
     */
    <View style={viewStyle}>
      <Image style={logoStyle} source={require('../../images/logo.png')} />
    </View>
  );
};
/** Styling Components
 * Styles are applied inline using nearly identical css selectors but in Camel case!
 */
const styles = {
  viewStyle: {
    alignItems: 'center',
    height: 60

  },
  logoStyle: {
    marginTop: 15,
    height: 78 * 0.5,
    width: 331 * 0.5
  }
};

/** Exporting
 * Make the component available to other parts of the app
 */
export { Header };
