import React from 'react';
import Layout from "../components/Layout";
import Header from '../components/Header';

const DefaultLayout = props => (
    <Layout render={child => (
        <div>
            <Header />
            {child}
        </div>
    )} {...props} />
);

export default DefaultLayout;
