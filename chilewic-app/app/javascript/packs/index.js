
import React from 'react'
import ReactDOM from 'react-dom'
//creacion de rutas de acceso con react router
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./Signup"



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route exact path="/" component={Signup} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
