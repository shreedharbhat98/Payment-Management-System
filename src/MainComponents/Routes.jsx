import React, { Component } from "react";
import { Switch,Route, Redirect } from "react-router-dom";
import Home from "./Home"
import SignUp from "./Redirect/SignUp";
import SignIn from "./Redirect/SignIn";


export default class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/SignUp" render={()=><SignUp/>}/>
                <Route path="/SignIn" render={()=><SignIn/>}/>
            </Switch>
        )
    }
}