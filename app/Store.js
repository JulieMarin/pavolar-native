import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

// const middleware = process.env.NODE_ENV !== 'production' ?
//   [require('redux-immutable-state-invariant')(), ReduxThunk] :
//   ReduxThunk;

const Store = createStore(reducers, {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default Store;
