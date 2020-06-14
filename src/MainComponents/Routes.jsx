import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import SignUp from "./Redirect/SignUp";
import SignIn from "./Redirect/SignIn";
import Dashboard from "./DashboardComponents/Dashboard"
import Category from "./DashboardComponents/Category";
import Users from "./DashboardComponents/Users";
import EditExpense from "./DashboardComponents/EditExpense";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/SignUp" exact render={() => <SignUp />} />
                <Route path="/SignIn" exact render={() => <SignIn />} />
                <Route path="/Dashboard" exact render={(props) => <Dashboard {...props}/>} />
                <Route path="/Category" exact render={() => <Category />} />
                <Route path="/Users" exact render={() => <Users />} />
                <Route path="/Dashboard/:id" exact render={(props)=><EditExpense {...props}/>} />
            </Switch>
        )
    }
}