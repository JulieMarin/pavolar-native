import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

const Store = createStore(reducers, {}, composeWithDevTools(
  applyMiddleware(ReduxThunk)
));

export default Store;
