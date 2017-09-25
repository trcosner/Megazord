import React from 'react';
import Loadable from 'react-loadable';

const asyncComponent = fn => Loadable({
    loader: fn,
    loading: Loading
});

const Loading = () => <div></div>;

export default asyncComponent;