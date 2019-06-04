import React, { Component } from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import FlashMessage from "./FlashMessage";
import axios from "axios";
import * as _ from "lodash";
//import { CustomSelect } from "../CustomInputs";

const RegistroSchema = Yup.object().shape({
  nombre: Yup.string().required("Campo requerido"),
  apellido: Yup.string().required("Campo requerido"),
  correo: Yup.string().email("Debe tener formato de email").required("Campo requerido"),
  telefono: Yup.number().integer("Deben ser números").required("Campo requerido"),
  institucion: Yup.string().required("Campo requerido")
});

class RegistroForm extends Component {
  state = {
    ui: {
      isSubmitting: false,
      showMessage: false,
      messageType: undefined,
      message: undefined
    }
  };

  componentDidMount() {
    //Actualizar el UI de forma correcta
    let ui = this.state.ui;
    ui.isSubmitting = true;
    this.setState({ ui });
}
  showMessage = message_data => {
    this.setState(state => {
      state.ui.showMessage = message_data.show_message;
      state.ui.messageType = message_data.message_type;
      state.ui.message = message_data.message;
      return { ui: state.ui };
    });
  };

  render() {
    const flash_message = this.state.ui.showMessage ? ( <FlashMessage type={this.state.ui.messageType} msg={this.state.ui.message}/> ) : null;
    const button_label = "Agregar";


    return (
      <div className="container">
        {flash_message}
        <Formik showMessage={this.showMessage} enableReinitialize={true} initialValues={""} validationSchema={RegistroSchema}
        onSubmit={(values, { setSubmitting }) => {

          const token = null;
          const url = `api/asistencias`;
          const method = "POST";

            axios(
             url,{
               method,
               url,
               responseType: "json",
               headers: {
                 "Content-Type": "application/json"
                 },
               data:  {asistencium: values }
                })
              .then(response => {
                if (response.data.success) {
                  window.location.assign(`/asistencia?success=1`);
                  }
                 else {
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
          }}>

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
                        <div className="col-lg-6">
                          <div className="form-group mb-3">
                            <label htmlFor="nombre">Nombre</label>

                            <Field
                              type="text"
                              name="nombre"
                              className={
                                "form-control " +
                                classNames({
                                  "is-invalid":
                                    touched.nombre && errors.nombre,
                                  "is-valid":
                                    touched.nombre && !errors.nombre
                                })
                              }/>
                            <ErrorMessage name="nombre">
                              {msg => (
                                <div
                                  className="invalid-feedback"
                                  style={{ display: "block" }}
                                >
                                  {msg}
                                </div>
                              )}
                            </ErrorMessage>

                            <label htmlFor="correo">
                              E-Mail
                            </label>
                          <Field
                          type="text"
                          name="correo"
                          className={
                            "form-control " +
                            classNames({
                              "is-invalid":
                                touched.correo && errors.correo,
                              "is-valid":
                                touched.correo && !errors.correo
                            })
                          }
                          />
                          <ErrorMessage name="correo">
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
                        <div className="col-lg-6">
                          <div className="form-group mb-3">


                          <label htmlFor="apellido">
                            Apellido
                          </label>
                        <Field
                        type="text"
                        name="apellido"
                        className={
                          "form-control " +
                          classNames({
                            "is-invalid":
                              touched.apellido && errors.apellido,
                            "is-valid":
                              touched.apellido && !errors.apellido
                          })
                        }
                        />
                        <ErrorMessage name="apellido">
                        {msg => (
                          <div
                            className="invalid-feedback"
                            style={{ display: "block" }}
                          >
                            {msg}
                          </div>
                        )}
                        </ErrorMessage>



                        <label htmlFor="telefono">
                          Teléfono
                        </label>
                    <Field
                      type="text"
                      name="telefono"
                      className={
                        "form-control " +
                        classNames({
                          "is-invalid":
                            touched.telefono && errors.telefono,
                          "is-valid":
                            touched.telefono && !errors.telefono
                        })
                      }
                    />
                    <ErrorMessage name="telefono">
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
                    <div className="col-lg-6">
                      <div className="form-group mb-3">


                    <label htmlFor="institucion">
                      Institución
                    </label>
                  <Field
                    type="text"
                    name="institucion"
                    className={
                      "form-control " +
                      classNames({
                        "is-invalid":
                          touched.institucion && errors.institucion,
                        "is-valid":
                          touched.institucion && !errors.institucion
                      })
                    }
                  />
                  <ErrorMessage name="institucion">
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
                        {`${button_label} asistencia`}
                      </button>
                    </div>
                  </div>
                </form>
              </React.Fragment>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default RegistroForm;
