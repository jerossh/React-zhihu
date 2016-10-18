/**
 * Created by kutear on 16-10-17.
 * 路由
 */
import React from "react";
import {Router, IndexRoute, Route, browserHistory} from "react-router";
import Main from "../component/Main";
import Container from "../component/Container";
import Details from "../component/Details";

const RouterConfig = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={Main}/>
            <Route path="/news" component={Details}/>
        </Route>
    </Router>);

export default RouterConfig


