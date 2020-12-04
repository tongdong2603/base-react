import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reduxBatch } from '@manaflair/redux-batch';
import createSagaMiddleware from 'redux-saga';

//
import rootReducer from '@redux/root-reducer';
import sagas from '@redux/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: { home: 1000 },
  enhancers: [reduxBatch],
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(sagas);

export { store };
