import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import './Navbar.css';

function Navbars() {
    return (
        <div>
             <Navbar bg="info" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          {/* <img src={logo} alt="" /> */}
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="product">
            <NavDropdown.Item href="product/tea">Tea</NavDropdown.Item>
            <NavDropdown.Item href="product/coffee">Coffee</NavDropdown.Item>
            <NavDropdown.Item href="product/chocalate">chocalate</NavDropdown.Item>
            <NavDropdown.Divider></NavDropdown.Divider>
            <NavDropdown.Item href="product/penut">penut</NavDropdown.Item>
          </NavDropdown>
          {/* Nav.Link for indivual menu without drop down  */}
          <Nav.Link href="blog">Blog</Nav.Link>
          <Nav.Link href="about-us">About us</Nav.Link>
          <Nav.Link href="contact-us">Contact us</Nav.Link>
        </Nav>
        </Navbar.Collapse>

      </Navbar>
        </div>
    )
}

export default Navbars
