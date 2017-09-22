import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from "./utils/asyncComponent";
import DefaultLayout from "./layouts/DefaultLayout";

const Home     = asyncComponent(() => import("./pages/Home"));
const Charting = asyncComponent(() => import("./pages/Charting"));

const Derp = () => <Link to="/">Derp</Link>;

const Routes = () => (
    <Router>
        <div>
            <DefaultLayout>
                <Route exact path="/" component={Home} />
                <Route path="/charting" component={Charting} />
            </DefaultLayout>

            <Route path="/derp" component={Derp} />
        </div>
    </Router>
);

export default Routes;
