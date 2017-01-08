import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, ListView } from 'react-native';
import Drawer from 'react-native-drawer';
import ResultHeader from './ResultHeader';
import TravelDestinationBlock from './TravelDestinationBlock';
import FlightInfo from './FlightInfo';
import ColumnWrapper from './ColumnWrapper';
import Separator from './Separator';
import SearchResults from './SearchResults';
import FilterMenu from './FilterMenu';

class AvailableFlights extends Component {
  renderRow(result) {
    const destinationMode = () => {
      return (
        result.combinations[0].flightChoices.length == 1 ? 'One Way' : 'Round Trip'
      )
    }
    return(
      <SearchResults
        destinationMode={destinationMode()}
        totalPrice={result.pricing.total}
        airlineCode1={result.combinations[0].flightChoices[0].flightDetails[0].carrier.marketingCarrier}
        airlineCode2={result.combinations[0].flightChoices[1].flightDetails[0].carrier.marketingCarrier}
        departAirportCode={result.combinations[0].flightChoices[0].flightDetails[0].location[0].locationId}
        arriveAirportCode={result.combinations[0].flightChoices[1].flightDetails[0].location[0].locationId}
        departLocation={this.props.depart}
        arriveLocation={this.props.destination}
        departTime1={result.combinations[0].flightChoices[0].flightDetails[0].dateTime.departureTime}
      />
    );
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataSource = ds.cloneWithRows(this.props.allResults);

    return (
      <Drawer
        type = "overlay"
        content = {<FilterMenu />}
        side = 'right'
        tapToClose = {true}
        openDrawerOffset = {75}
        open = {false}
        panCloseMask={0.3}
      >
        <ScrollView style={{ flex: 1, backgroundColor: '#fafafa' }}>
          <View style={styles.container}>
            <ListView
              enableEmptySections={true}
              dataSource={dataSource}
              renderRow={(data) => this.renderRow(data)}
            />
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

const mapStateToProps = ({ booking, searchParameters }) => {
  const {
    allResults
  } = booking.bFlights.results;

  const {
    depart,
    destination
  } = searchParameters.flights.request.params

  return {
    allResults,
    depart,
    destination
  };
};

export default connect(
  mapStateToProps,
null
)(AvailableFlights);
