import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import asyncComponent from "utils/asyncComponent";
import DefaultLayout from "layouts/DefaultLayout";

const Home     = asyncComponent(() => import("screens/Home"));
const Charting = asyncComponent(() => import("screens/Charting"));
const Forms    = asyncComponent(() => import("screens/Forms"));

const Derp = () => <Link to="/">Derp</Link>;

const Routes = ({ history }) => (
    <Router history={history}>
        <div>
            <DefaultLayout>
                <Route exact path="/" component={Home} />
                <Route path="/charting" component={Charting} />
                <Route path="/forms" component={Forms} />
            </DefaultLayout>

            <Route path="/derp" component={Derp} />
        </div>
    </Router>
);

export default Routes;