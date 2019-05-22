import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";




export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      contrasena: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.contrasena.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Correo Electrónico</FormLabel>
            <FormControl autoFocus type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Contraseña</FormLabel>
            <FormControl
              value={this.state.contrasena}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large"   disabled={!this.validateForm()}       type="submit"  >  Login
          </Button>
        </form>
      </div>
    );
  }
}
