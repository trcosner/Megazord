import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';
import registerServiceWorker from 'utils/registerServiceWorker';
import {enableLogging} from 'mobx-logger';

import store from 'stores';

import Routes from 'screens';

enableLogging();

ReactDOM.render(
    <ThemeProvider>
        <StoreProvider {...store}>
            <Routes />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
