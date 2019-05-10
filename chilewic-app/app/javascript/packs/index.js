
import React from 'react'
import ReactDOM from 'react-dom'
//creacion de rutas de acceso con react router
import {BrowserRouter as Router, Route} from "react-router-dom"
import App from "../components/App"



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
