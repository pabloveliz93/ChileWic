import React, { Component } from "react";
import {Route,Switch,Router} from "react-router-dom"
import Login from "./Login"
import Registro from "./Registro"
import RegistroAsistenciaForm from "./RegistroAsistenciaForm"
import Home from "./Home"
import Toolbar from "./inicio/Toolbar"




export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Toolbar />


        <Switch>


          <Route exact path="/" component = {Home} />
          <Route exact path="/about" component = {Registro} />
          <Route exact path = "/registroasistencia" component = {RegistroAsistenciaForm} />



        </Switch>
        
        </React.Fragment>

    );
  }
}
