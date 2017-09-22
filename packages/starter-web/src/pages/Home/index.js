import React from 'react';
import { observer, inject } from 'mobx-react';

const Home = inject("todos")(observer(({ todos }) => (
    <div>
        {todos.count}
        <button onClick={todos.increment}>+</button>
    </div>
)));

export default Home;