import React from 'react'
import ReactDOM from 'react-dom'
import RegistroAsistenciaForm from './registro_asistencia_form/RegistroAsistenciaForm';

window.jQuery(document).on('turbolinks:load', function () {
  const el = document.getElementById('asistencia')
  if(el != null) {
    window.jQuery(document).on('turbolinks:before-cache', () => ReactDOM.unmountComponentAtNode(el))
      ReactDOM.render(
        <RegistroAsistenciaForm/>,
        el
      )
    }
  }
)
