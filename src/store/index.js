import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modeles/rootReducer';
import rootSaga from './modeles/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddlerare = createSagaMiddleware({
  sagaMonitor,
});

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddlerare))
    : applyMiddleware(sagaMiddlerare);

const store = createStore(rootReducer, enhancer);

sagaMiddlerare.run(rootSaga);

export default store;
