import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Book Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mr-4">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ml-4">
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/login">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
