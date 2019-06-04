import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import RegisterUser from "./RegisterUser";

import Button from 'react-bootstrap/Button';



export default class CModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registrate!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterUser/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
