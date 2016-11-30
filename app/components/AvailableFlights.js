import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Drawer from 'react-native-drawer';
import ResultHeader from './ResultHeader';
import TravelDestinationBlock from './TravelDestinationBlock';
import FlightInfo from './FlightInfo';
import ColumnWrapper from './ColumnWrapper';
import Separator from './Separator';
import SearchResults from './SearchResults';
import FilterMenu from './FilterMenu';

class AvailableFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    }
  }

  drawerToggle() {
    this.setState({
      drawerOpen: !this.drawerOpen
    });
  }

  render() {
    return (
      <Drawer
        type = "overlay"
        content = {<FilterMenu />}
        side = 'right'
        tapToClose = {true}
        openDrawerOffset = {75}
        open = {this.state.drawerOpen}
        panCloseMask={0.3}
      >
        <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <View style={styles.container}>
              <SearchResults />
              <SearchResults />
          </View>
        </ScrollView>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    borderColor: '#f5f2f2',
    paddingTop: 8,
    paddingBottom: 20,
  }
});

export default AvailableFlights;
