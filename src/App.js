import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobolStyle from './styles/global';
import Header from './components/Header';
import './config/ReactotronConfig';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobolStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
