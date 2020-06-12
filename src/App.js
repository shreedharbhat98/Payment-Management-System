import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import Home from './MainComponents/Home';
import Routes from './MainComponents/Routes';


class App extends Component {

  render() {
    return (
      <>
        {/* // <Provider store={""}> */}
        {/* <Home/> */}
        <Routes />
        {/* </Provider> */}
      </>
    );
  }
}
export default App;
