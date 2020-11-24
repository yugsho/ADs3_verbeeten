import React, { Component } from "react";
import Donatie from './donatie';
import Home from './home';
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Box from "@material-ui/core/Box"

class Main extends Component {
  render() {
    return (
  <Box position="static">
    <HashRouter>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/donatie">Donatie</NavLink></li>
      </ul>
      <Box className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/donatie" component={Donatie}/>
      </Box>
      </HashRouter>
  </Box>
    );
  }
}

export default Main;
