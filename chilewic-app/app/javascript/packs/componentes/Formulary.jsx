import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";



class Formulary extends React.Component {
  state = {
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    institucion: ''
  }
  handleSubmit = event => {
    event.preventDefault();
    const post = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      correo: this.state.correo,
      telefono: this.state.telefono,
      institucion: this.state.institucion,
    }

    axios
      .post('/api/asistencias', post)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>POST</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input
              name="nombre"
              onChange={this.handleChange}
              placeholder="nombre"
              type="text"
            />
            <input
              name="apellido"
              onChange={this.handleChange}
              placeholder="apellido"
              type="text"
            />
            <input
              name="correo"
              onChange={this.handleChange}
              placeholder="correo"
              type="text"
            />
            <input
              name="telefono"
              onChange={this.handleChange}
              placeholder="telefono"
              type="text"
            />
            <input
              name="institucion"
              onChange={this.handleChange}
              placeholder="institucion"
              type="text"
            />
          <button>Create Post</button>
        </form>
      </div>
    )
  }
}

export default Formulary
