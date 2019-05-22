import React, { Component } from "react";
import {Route,Switch} from "react-router-dom"
import Login from "./Login"
import Registro from "./Registro"




export default class App extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/about" component = {Registro} />
          

        </switch>
      </div>
    );
  }
}
