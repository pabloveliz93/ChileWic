import React, { Component } from "react";
import {Route,Switch} from "react-router-dom"
import Login from "./Login"
import Registro from "./Registro"
import RegistroAsistenciaForm from "./RegistroAsistenciaForm"





export default class App extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path="/" component = {Login} />
          <Route exact path="/about" component = {Registro} />
          <Route exact path = "/registroasistencia" component = {RegistroAsistenciaForm} />


        </switch>
      </div>
    );
  }
}
