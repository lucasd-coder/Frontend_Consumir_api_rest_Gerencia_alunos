/* eslint-disable comma-dangle */
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persisteReducers from './modules/reduxPersite';

import routReducer from './modules/routeReducer';
import rootSaga from './modules/routeSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persisteReducers(routReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
