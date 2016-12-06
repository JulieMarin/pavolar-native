import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Modal from 'react-native-modalbox';
import Drawer from 'react-native-drawer';
import MainPage from './components/MainPage';
import RouterComponent from './Router';
import DrawerMenu from './components/DrawerMenu';
import FilterMenu from './components/FilterMenu';
import DateModal from './components/DateModal';
import Store from './Store';
import SignInMenu from './components/SignInMenu';

class App extends Component {
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
      drawerContent: <DrawerMenu handleEvent={this.toggleSignIn.bind(this)}/>
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
        <Provider store={Store}>
            <RouterComponent />
        </Provider>

        <Modal
          style={styles.dateModal}
          isOpen={false}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={true}
          // backdropColor={'rgb(0, 133, 255)'}
        >
          <DateModal />
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
          isOpen={this.state.signInModalToggle}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
        >
          <SignInMenu />
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
    height: 350,
    paddingTop: 30,
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

export default App;
