import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
import NavigationBar from 'react-native-navbar';
import Drawer from 'react-native-drawer';
import dismissKeyboard from 'dismissKeyboard';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import backgroundAssets from '../images/BackgroundAssets';
import Tab from './Tab';
import LocationSelection from './LocationSelection';
import Dock from './Dock';
import DateSelection from './DateSelection';
import PassengerSelection from './PassengerSelection';
import SearchButton from './SearchButton';
import FlightPreference from './FlightPreference';
import {
  toggleTravelMode,
  updateLocField,
  updateDateField,
  packageParams,
  toggleSearchModal
} from '../actions';

class MainPage extends Component {
  constructor(props) {
    super(props);

  }

  beginFlightSearch() {
    const {
      flights,
      packageParams
    } = this.props;

    packageParams(flights);
  }

  render() {
    const {
      toggleSearchModal,
      packageParams,
      flights
    } = this.props;

    return (
      <View style={container}>
        <Image style={backgroundImage} source={require('image!bg_1')}>
        <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps={true}>
          <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
            <View>
              <Tab
                action={this.props.toggleTravelMode.bind(this)}
                updateLocField={this.props.updateLocField.bind(this)}
                updateDateField={this.props.updateDateField.bind(this)}
              />
              <View style={{ zIndex: 100 }}>
                <LocationSelection />
              </View>
              <View style={{ zIndex: 1 }}>
                <DateSelection />
              </View>
              <PassengerSelection />
              <FlightPreference />
              <SearchButton
                beginFlightSearch={this.beginFlightSearch.bind(this)}
              />
            </View>
          </TouchableWithoutFeedback>
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

const {
  container,
  backgroundImage,
  logoStyle,
  navBar,
  statusBar
} = styles;

const mapStateToProps = ({ searchParameters }) => {
  const { flights } = searchParameters;

  return {
    flights
  };
};

export default connect(
  mapStateToProps, {
    toggleTravelMode,
    updateLocField,
    updateDateField,
    packageParams,
    toggleSearchModal
  }
)(MainPage);
