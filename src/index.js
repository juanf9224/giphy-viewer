import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import store from './store/configureStore';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import GiphyDashboard from './components/GiphyDashboard';
import Header from './components/Header';

const app = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Header />
      <GiphyDashboard />
    </Provider>
  </ThemeProvider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
