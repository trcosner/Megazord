import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';
import registerServiceWorker from 'utils/registerServiceWorker';
import {enableLogging} from 'mobx-logger';
import a11y from 'react-a11y';
import syncHistoryWithStore from 'utils/syncHistoryWithStore';

import stores from 'stores';
import Routes from 'screens';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.router);

if (process.env.NODE_ENV  === 'development') a11y(React);
enableLogging();

ReactDOM.render(
    <ThemeProvider>
        <StoreProvider {...stores}>
            <Routes history={history} />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
