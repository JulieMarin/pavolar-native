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
import { loginUser, authUser } from '../actions';

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
          <RouterComponent />
        <Modal
          style={styles.dateModal}
          isOpen={false}
          position={"center"}
          entry={'bottom'}
          animationDuration={400}
          swipeToClose={true}
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
          isOpen={this.props.loading}
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

const mapStateToProps = ({ auth }) => {
  const { email, password, statusMessage, loading, sessionID } = auth;
  return { email, password, statusMessage, loading, sessionID };
};

export default connect(mapStateToProps, { loginUser, authUser })(RootLayer);
