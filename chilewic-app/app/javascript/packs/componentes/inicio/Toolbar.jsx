import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import {Navbar, Nav,NavDropdown} from "react-bootstrap"
import {Link} from "react-router-dom"

import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'




class Toolbar extends Component {
  render () {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
         <Navbar.Brand >
         <Link to="/">ChileWic</Link></Navbar.Brand>
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
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
  }

}

export default Toolbar;
