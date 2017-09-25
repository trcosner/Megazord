import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';
import registerServiceWorker from 'utils/registerServiceWorker';
import {enableLogging} from 'mobx-logger';
import a11y from 'react-a11y';

import store from 'stores';

import Routes from 'screens';

if (process.env.NODE_ENV  === 'development') a11y(React);
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
