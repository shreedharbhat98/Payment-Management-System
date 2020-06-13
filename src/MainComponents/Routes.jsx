import React, { Component } from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home"
import SignUp from "./Redirect/SignUp";
import SignIn from "./Redirect/SignIn";
import Dashboard from "./DashboardComponents/Dashboard"
import Category from "./DashboardComponents/Category";
import Users from "./DashboardComponents/Users";

export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/SignUp" render={()=><SignUp/>}/>
                <Route path="/SignIn" render={()=><SignIn/>}/>
                <Route path="/Dashboard" render={()=><Dashboard/>}/>
                <Route path="/Category" render={()=><Category/>}/>
                <Route path="/Users" render={()=><Users/>}/>
            </Switch>
        )
    }
}