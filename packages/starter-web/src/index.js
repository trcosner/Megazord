import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ThemeProvider } from 'rebass';
import { Provider as StoreProvider } from 'mobx-react';
import registerServiceWorker from 'utils/registerServiceWorker';
import { enableLogging } from 'mobx-logger';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

import a11y from 'react-a11y';
import store from 'stores';
import Routes from 'screens';
import messages from 'translations/';

if (process.env.NODE_ENV  === 'development') a11y(React);

enableLogging();

addLocaleData([...en, ...fr, ...es]);

ReactDOM.render(
    <ThemeProvider>
        <StoreProvider {...store}>
          <IntlProvider locale={navigator.language} messages={messages[navigator.language]}>
            <Routes />
          </IntlProvider>
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();
