import React from 'react';
import { observer, inject } from 'mobx-react';
import { FormattedMessage } from 'react-intl';

const Home = inject("todos")(observer(({ todos }) => (
    <div>
      <FormattedMessage
        id="welcome"
        defaultMessage={`Hello, you have {count, number} {count, plural,
          one {message}
          other {messages}
        }`}
        values={{count: todos.count}}
        />
        <br />
        <button onClick={todos.increment}>+</button>
    </div>
)));

export default Home;
