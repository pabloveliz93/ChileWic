import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel ,ButtonToolbar} from "react-bootstrap"
import {Navbar, Nav,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import CModal from "./Modal";


import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'




class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: false };
  }
  render () {
      let modalClose = () => this.setState({ modalShow: false });
    return (
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand >
         <Link to="/"><img width="150" height="30" className="d-inline-block align-top" src={require('./asserts/fondo.png')} /></Link></Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Item>


                  <Nav.Link >
                  <Link to="/about">About</Link>
                  </Nav.Link>
                  </Nav.Item>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <ButtonToolbar>
      <Button
        variant="primary"
        onClick={() => this.setState({ modalShow: true })}
      >
        Registro
      </Button>

      <CModal
        show={this.state.modalShow}
        onHide={modalClose}
      />
    </ButtonToolbar>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
  }

}

export default Toolbar;
