import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import RootLayer from './components/RootLayer';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootLayer />
      </Provider>
    );
  }
}

export default App;
