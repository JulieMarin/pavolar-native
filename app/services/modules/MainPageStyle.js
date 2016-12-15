import { StyleSheet } from 'react-native';

export const onAutoCompleteShow = (airportLocation) => {
  if (airportLocation != '') {
    return (
      {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
      }
    )
  }
  return (
    {
      borderWidth: 0,
      paddingLeft: 10,
      paddingRight: 10,
    }
  )
}
