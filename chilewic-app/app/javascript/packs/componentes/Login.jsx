import React, { Component } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import FlashMessage from "../FlashMessage";
import axios from "axios";
import * as _ from "lodash";

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

//import { CustomSelect } from "../CustomInputs";

const LoginSchema = Yup.object().shape({
  /*nombre: Yup.string().required("Campo requerido"),
  country: Yup.string().required("Campo requerido")*/
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      contrasena: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
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
<<<<<<< HEAD
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.contrasena}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
=======
    const flash_message = this.state.ui.showMessage ? (
      <FlashMessage
        type={this.state.ui.messageType}
        msg={this.state.ui.message}
      />
    ) : null;
    const button_label = "Log in";//this.props.cityId ? "Editar" : "Agregar nueva";
  /*  const countries_options = this.state.countries.map(country => (
      <option value={country.id} key={country.id}>
        {country.description}
      </option>
    ));*/
    return (
      <div className="container">
        {flash_message}
        <Formik
          showMessage={this.showMessage}
          enableReinitialize={true}
          initialValues={""}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // const token = document.getElementsByName("csrf-token")[0].content;
            const token = null;
            /*const url = this.props.cityId
              ? `/admin/cities/${this.props.cityId}.json`
              : `/admin/cities.json`;*/
            /*const method = this.props.cityId ? "PUT" : "POST";*/
            const url = `/login.json`;
            const method = "POST";
            axios(url,{
              method,
              url,
              responseType: "json",
              headers: {
                "Content-Type": "application/json"
              },
              data: { persona: values }
            })
              .then(response => {
                if (response.data.success) {
                  window.location.assign(`/personas?success=1`);
                } else {
                  this.showMessage({
                    show_message: true,
                    message_type: "alert-warning",
                    message: response.data.message || "Ha ocurrido un error inesperado"
                  });
                }
              })
              .catch(error =>
                this.showMessage({
                  show_message: true,
                  message_type: "alert-danger",
                  message: "Ha ocurrido un error inesperado"
                })
              )
              .then(() => setSubmitting(false));
          }}
        >
          {({
            values,
            errors,
            touched,
            dirty,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => {
            return (
              <React.Fragment>
                <form onSubmit={handleSubmit} className="">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group mb-3">


                            <label htmlFor="mail">
                              E-Mail
                            </label>
                          <Field
                          type="email"
                          name="mail"
                          className={
                            "form-control " +
                            classNames({
                              "is-invalid":
                                touched.mail && errors.mail,
                              "is-valid":
                                touched.mail && !errors.mail
                            })
                          }
                          />
                          <ErrorMessage name="mail">
                          {msg => (
                            <div
                              className="invalid-feedback"
                              style={{ display: "block" }}
                            >
                              {msg}
                            </div>
                          )}
                          </ErrorMessage>


                        </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-3">


                          <label htmlFor="contrasena">
                          contraseña
                          </label>
                        <Field
                        type="password"
                        name="contrasena"
                        className={
                          "form-control " +
                          classNames({
                            "is-invalid":
                              touched.contrasena && errors.contrasena,
                            "is-valid":
                              touched.contrasena && !errors.contrasena
                          })
                        }
                        />
                        <ErrorMessage name="contrasena">
                        {msg => (
                          <div
                            className="invalid-feedback"
                            style={{ display: "block" }}
                          >
                            {msg}
                          </div>
                        )}
                        </ErrorMessage>



                    </div>
                    </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {`${button_label} `}
                      </button>
                    </div>
                  </div>
                </form>
              </React.Fragment>
            );
          }}
        </Formik>
>>>>>>> a85f510f4018c91baedf63857cda7ddf91338286
      </div>
    );
  }
}
