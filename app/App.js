import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer';
import MainPage from './components/MainPage';
import Router from './Router';
import DrawerMenu from './components/DrawerMenu';
import Store from './Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerContent: <View />
    };
  }

  openDrawer() {
    StatusBar.setHidden(true, 'slide');
    this.setState({
      drawerContent: DrawerMenu()
    });
  }

  closeDrawer() {
    StatusBar.setHidden(false, 'slide');
    this.setState({
      drawerContent: <View />
    });
  }

  render() {
    return (
      <Drawer
        type="static"
        content={this.state.drawerContent}
        openDrawerOffset={75}
        tweenHandler={Drawer.tweenPresets.parallax}
        onOpenStart={this.openDrawer.bind(this)}
        onClose={this.closeDrawer.bind(this)}
        tapToClose={true}
      >
        <Provider store={Store}>
            <Router />
        </Provider>
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
});

export default App;
