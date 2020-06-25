import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { AppContextProvider } from './components/Firebase';

ReactDOM.render(
  <AppContextProvider value={new Firebase()}>
    <App />
  </AppContextProvider>,

  document.getElementById('root')
);
