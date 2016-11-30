import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Assets from '../images/Assets';

const Dock = (props) => {
  return (
    <View style={container}>
      <View style={button}>
        <Image style={icon} source={Assets.flightsActive} />
        <Text style={text}>FLIGHTS</Text>
        <Text style={[subText, textInv]}>COMING SOON</Text>
      </View>

      <View style={button}>
        <Image style={icon} source={Assets.hotels} />
        <Text style={[text, textLight]}>HOTELS</Text>
        <Text style={subText}>COMING SOON</Text>
      </View>

      <View style={button}>
        <Image style={icon} source={Assets.cars} />
        <Text style={[text, textLight]}>CARS</Text>
        <Text style={subText}>COMING SOON</Text>
      </View>

      <View style={button}>
        <Image style={icon} source={Assets.cruises} />
        <Text style={[text, textLight]}>CRUISES</Text>
        <Text style={subText}>COMING SOON</Text>
      </View>

      <View style={button}>
        <Image style={icon} source={Assets.deals} />
        <Text style={[text, textLight]}>DEALS</Text>
        <Text style={subText}>COMING SOON</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    backgroundColor: '#0172fc',
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    paddingTop: 4,
    marginBottom: 1
  },
  text: {
    fontSize: 9,
    fontWeight: '500',
    color: '#ffffff'
  },
  subText: {
    fontSize: 7,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)'
  },
  textLight: {
    color: 'rgba(255, 255, 255, 0.5)'
  },
  textInv: {
    color: 'rgba(0, 0, 0, 0)'
  },
  button: {
    paddingTop: 8,
    alignItems: 'center'
  }
});

const { container, icon, text, subText, textLight, textInv, button } = styles;

export default Dock;
