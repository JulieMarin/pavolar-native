import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import Drawer from 'react-native-drawer';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text
} from 'react-native';
import backgroundAssets from '../images/BackgroundAssets';
import Tab from './Tab';
import LocationSelection from './LocationSelection';
import Dock from './Dock';
import DateSelection from './DateSelection';
import PassengerSelection from './PassengerSelection';
import SearchButton from './SearchButton';
import FlightPreference from './FlightPreference';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: null,
    };
  }

  backgroundCycle() {
    return backgroundAssets.getRandomBg();
  }

  render() {
    return (
      <View style={container}>
        <Image style={backgroundImage} source={this.backgroundCycle()}>
        <ScrollView style={{ flex: 1 }}>
          <Tab />
          <LocationSelection />
          <DateSelection />
          <PassengerSelection />
          <FlightPreference />
          <SearchButton />
        </ScrollView>
        <Dock />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  navBar: {
    backgroundColor: 'rgb(255, 255, 255)',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 0.4,
    zIndex: 1
  },
  statusBar: {
    height: 20,
    backgroundColor: '#ffffff',
    zIndex: 2,
  }
});

const { container, backgroundImage, logoStyle, navBar, statusBar } = styles;

export default MainPage;
