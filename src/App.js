import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobolStyle from './styles/global';
import Header from './components/Header';
import './config/ReactotronConfig';

import history from './services/history';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobolStyle />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
