import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainPage from './components/MainPage';
import Title from './components/Title';
import SearchResultTitle from './components/SearchResultTitle';
import AvailableFlights from './components/AvailableFlights';
import FilterConfig from './components/FilterConfig';
import BookingStepOne from './components/BookingStepOne';
import BookingStepTwo from './components/BookingStepTwo';
import BookingStepThree from './components/BookingStepThree';
import BookingStepFour from './components/BookingStepFour';
import BookingStepFive from './components/BookingStepFive';
import Confirmation from './components/Confirmation';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.header}>
      <Scene
        sceneStyle={styles.container}
        key='mainPage'
        component={MainPage}
        title={Title}
      />
      <Scene
        renderRightButton={FilterConfig}
        sceneStyle={styles.container}
        key='bookingSearchResults'
        renderTitle={SearchResultTitle}
        component={AvailableFlights}
        initial
      />
      <Scene
        renderRightButton={
          () =>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.price}>$880</Text>
            <Text style={styles.subText}>Round Trip</Text>
          </View>
        }
        backTitle={'Cancel'}
        backButtonTextStyle={styles.backButton}
        sceneStyle={styles.container}
        key='BookingStepOne'
        component={BookingStepOne}
        title={'Choose'}
        titleStyle={styles.headerFont}
      />
      <Scene
        renderRightButton={
          () =>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.price}>$880</Text>
            <Text style={styles.subText}>Round Trip</Text>
          </View>
        }
        navigationBarStyle={styles.headerNoShadow}
        sceneStyle={styles.container}
        key='BookingStepTwo'
        title={'Choosing options'}
        component={BookingStepTwo}
        titleStyle={styles.headerFont}
      />
      <Scene
        navigationBarStyle={styles.headerNoShadow}
        sceneStyle={styles.container}
        key='BookingStepThree'
        title={'Your flight details'}
        component={BookingStepThree}
        titleStyle={styles.headerFont}
        // initial
      />
      <Scene
        backTitle={'Cancel'}
        navigationBarStyle={styles.headerBlue}
        sceneStyle={styles.container}
        key='BookingStepFour'
        title={'Traveller info'}
        component={BookingStepFour}
        titleStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        backButtonTextStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        hideBackImage={true}
        onRight={() => Actions.BookingStepFive()}
        rightTitle="Next"
        rightButtonTextStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        // initial
      />
      <Scene
        backTitle={'Back'}
        navigationBarStyle={styles.headerBlue}
        sceneStyle={styles.container}
        key='BookingStepFive'
        title={'Payment'}
        component={BookingStepFive}
        titleStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        backButtonTextStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        hideBackImage={true}
        rightTitle={'Pay'}
        rightButtonTextStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        onRight={() => Actions.confirmation()}
      />
      <Scene
        backTitle={'Close'}
        navigationBarStyle={styles.headerBlue}
        sceneStyle={styles.container}
        key='confirmation'
        title={'Confirmation'}
        component={Confirmation}
        titleStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        backButtonTextStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
        hideBackImage={true}
        rightButtonStyle={[styles.headerFont, { color: '#ffffff', fontWeight: '600' }]}
      />
    </Router>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: { width: -2.5, height: 0 },
    shadowOpacity: 0.2,
    marginTop: 70,
  },
  headerNoShadow: {
    height: 70,
    backgroundColor: '#ffffff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0,
  },
  headerBlue: {
    height: 70,
    backgroundColor: '#1066cb',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0,
  },
  headerFont: {
    fontSize: 14,
    fontFamily: 'AvenirNext-Medium',
  },
  price: {
    height: 20,
    fontSize: 18,
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '600'
  },
  subText: {
    fontSize: 9,
    fontFamily: 'AvenirNext-Medium',
    color: '#9e9e9e'
  },
  backButton: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#313131',
    fontFamily: 'AvenirNext-Medium',
    fontWeight: '300'
  }
});

export default RouterComponent;
