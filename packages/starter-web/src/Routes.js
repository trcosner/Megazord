import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./pages/Home";
import Charting from "./pages/Charting";

const Routes = () => (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/charting" component={Charting} />
    </Router>
);

export default Routes;