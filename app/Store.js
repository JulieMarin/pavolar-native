import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant')(), ReduxThunk] :
  ReduxThunk;

const Store = createStore(reducers, {},
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
  applyMiddleware(...middleware)
));

export default Store;

// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk'
// import { composeWithDevTools } from 'remote-redux-devtools';
// import reducers from './reducers';
//
// const middleware = process.env.NODE_ENV !== 'production' ?
//   [require('redux-immutable-state-invariant')(), ReduxThunk] :
//   ReduxThunk;
//
// const Store = createStore(reducers, {},
//   applyMiddleware(ReduxThunk)
// );
//
// export default Store;
