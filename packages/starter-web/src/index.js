import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';
import registerServiceWorker from 'utils/registerServiceWorker';
import { enableLogging } from 'mobx-logger';
import { IntlProvider, addLocaleData } from 'react-intl';
import syncHistoryWithStore from 'utils/syncHistoryWithStore';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

import a11y from 'react-a11y';
import stores from 'stores';
import Routes from 'screens';
import messages from 'translations/';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.router);

if (process.env.NODE_ENV  === 'development') a11y(React);

enableLogging();

addLocaleData([...en, ...fr, ...es]);

ReactDOM.render(
    <ThemeProvider>
        <IntlProvider locale={navigator.language} messages={messages[navigator.language]}>
            <StoreProvider {...stores}>
                <Routes history={history} />
            </StoreProvider>
        </IntlProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
