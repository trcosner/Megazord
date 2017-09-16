import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from "./pages/Home";
import Charting from "./pages/Charting";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/charting" component={Charting} />
        </Switch>
    </Router>
);

export default Routes;