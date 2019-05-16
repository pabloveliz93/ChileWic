import React from 'react'
import ReactDOM from 'react-dom'
import RegistroAsistenciaForm from './registro_asistencia_form/RegistroAsistenciaForm'
import {BrowserRouter as Router, Route} from "react-router-dom"

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={RegistroAsistenciaForm} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
