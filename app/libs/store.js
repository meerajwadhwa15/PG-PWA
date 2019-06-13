import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import Saga from './sagas';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' && typeof window === 'object'
    ? composeWithDevTools
    : compose;


export default (options) => {
  const configureStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      createReducer(),
      composeEnhancers(applyMiddleware(sagaMiddleware)),
    );

    // 3: Run your sagas:
    for(let i = 0; i < Saga.length; i++) {
      sagaMiddleware.run(Saga[i]);
    }

    return store;
  };

  return configureStore;

};
