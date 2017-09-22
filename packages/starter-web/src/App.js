import React, { Component } from 'react';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';

import store from './store';

import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <StoreProvider {...store}>
                <ThemeProvider>
                    <Routes />
                </ThemeProvider>
            </StoreProvider>
        );
    }
}

export default App;
