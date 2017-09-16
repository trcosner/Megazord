import React, { Component } from 'react';
import { Provider } from 'rebass';

import logo from './resources/logo.svg';
import Header from "./components/Header";
import Routes from "./Routes";


class App extends Component {
  render() {
    return (
      <Provider>
        <Header />
        <Routes />
      </Provider>
    );
  }
}

export default App;
