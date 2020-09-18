/* eslint-disable comma-dangle */
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'consumir_api',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistReducers;
};
