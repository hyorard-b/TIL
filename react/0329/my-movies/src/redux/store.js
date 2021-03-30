import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from './storage/index';

const middlewares = [logger];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export const StoreProvider = props => {
  return <Provider store={store} {...props} />
}