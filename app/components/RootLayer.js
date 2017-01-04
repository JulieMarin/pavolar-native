import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Modal from 'react-native-modalbox';
import Drawer from 'react-native-drawer';
import RouterComponent from '../Router';
import DrawerMenu from './DrawerMenu';
import FilterMenu from './FilterMenu';
import DateModal from './DateModal';
import SignInMenu from './SignInMenu';
import LoadingModal from './LoadingModal';
import {
  loginUser,
  authUser,
  updateDateField,
  toggleDepartDateModal,
  toggleReturnDateModal,
  toggleSignInMenu,
} from '../actions';

class RootLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      drawerContent: <View />,
      signInModalToggle: true
    };
  }

  openDrawer() {
    StatusBar.setHidden(true, 'slide');
    this.setState({
      drawerContent: <DrawerMenu handleEvent={this.props.toggleSignInMenu.bind(this)}/>
    });
  }

  closeDrawer() {
    StatusBar.setHidden(false, 'slide');
    this.setState({
      drawerContent: <View />
    });
  }

  toggleSignIn() {
    this.setState({
      signInModalToggle: true,
      drawerOpen: false
    })
  }

  render() {
    const {
      departDateModalOpen,
      returnDateModalOpen,
      currentDate,
      maxDate,
      updateDateField,
      toggleDepartDateModal,
      toggleReturnDateModal,
      departDate,
      returnDate,
      signInOpen,
      searchModalOpen
    } = this.props;
    console.log(signInOpen);
    return (
        <Drawer
          open={this.state.drawerOpen}
          type="static"
          content={this.state.drawerContent}
          openDrawerOffset={75}
          tweenHandler={Drawer.tweenPresets.parallax}
          onOpenStart={this.openDrawer.bind(this)}
          onClose={this.closeDrawer.bind(this)}
          tapToClose={true}
        >
          <RouterComponent />
        <Modal
          style={styles.dateModal}
          isOpen={departDateModalOpen}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={true}
          backdropPressToClose={false}
        >
          <DateModal
            currentDate={currentDate}
            maxDate={maxDate}
            dateSelection={departDate}
            updateDateField={updateDateField.bind(this)}
            toggleModal={toggleDepartDateModal.bind(this)}
            keyRefs={{
              date: 'departDate',
              selected: 'departDateSelected'
            }}
          />
        </Modal>

        <Modal
          style={styles.dateModal}
          isOpen={returnDateModalOpen}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={true}
          backdropPressToClose={false}
        >
          <DateModal
            currentDate={currentDate}
            maxDate={maxDate}
            dateSelection={returnDate}
            updateDateField={updateDateField.bind(this)}
            toggleModal={toggleReturnDateModal.bind(this)}
            keyRefs={{
              date: 'returnDate',
              selected: 'returnDateSelected'
            }}
          />
        </Modal>

        <Modal
          style={styles.dateModal}
          isOpen={false}
          position={"top"}
          entry={'top'}
          animationDuration={600}
        >
          <FilterMenu />
        </Modal>

        <Modal
          isOpen={signInOpen}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={false}
          backdropPressToClose={false}
        >
          <SignInMenu />
        </Modal>
        <Modal
          isOpen={searchModalOpen}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={true}
          backdropPressToClose={true}
        >
          <LoadingModal />
        </Modal>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 18,
    marginRight: 18
  },
  dateModal: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 400,
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(221, 221, 221)'
  },
  filterMenu: {
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 300,
    paddingTop: 65,
    top: -20,
    borderBottomWidth: 1.5,
    borderColor: 'rgb(221, 221, 221)'
  }
});

const mapStateToProps = ({ auth, searchParameters }) => {
  const {
    email,
    password,
    statusMessage,
    loading,
    sessionID,
    signInOpen
  } = auth;

  const {
    departDateModalOpen,
    returnDateModalOpen,
    currentDate,
    maxDate,
    departDate,
    returnDate
  } = searchParameters.flights.datePreferences;

  const {
    searchModalOpen
  } = searchParameters.flights.locSearchResults;

  return {
    email,
    password,
    statusMessage,
    loading,
    sessionID,
    departDateModalOpen,
    returnDateModalOpen,
    currentDate,
    maxDate,
    departDate,
    returnDate,
    signInOpen,
    searchModalOpen
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    authUser,
    updateDateField,
    toggleDepartDateModal,
    toggleReturnDateModal,
    toggleSignInMenu,
  }
)(RootLayer);
