import React, { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./Login"
import Registro from "./Registro"
import RegistroAsistenciaForm from "./RegistroAsistenciaForm"
import Home from "./Home"
import {NoMatch404} from "./inicio/NoMatch404"
import Toolbar from "./inicio/Toolbar"
import {Layout} from "./inicio/Layout"
import Footer from "./inicio/Footer"

import Formulary from "./Formulary"




export default class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Router>
       <Toolbar />
         <Layout>

              <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/about" component = {Registro} />
                <Route path="/formulario" component = {Formulary} />
                <Route  path = "/registroasistencia" component = {RegistroAsistenciaForm} />
                <Route component= {NoMatch404} />
              </Switch>

              </Layout>
              <Footer/>

             </Router>


       </React.Fragment>

    );
  }
}
