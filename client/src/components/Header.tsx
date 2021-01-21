import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="bgBlack2">
      <Row className="justify-content-md-center">
        <Col lg="12" md="auto">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/">
              <Navbar.Brand>Store App</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form inline className="mr-4">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav className="ml-4">
                <Link to="/cart">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i> Cart
                </Link>
                <Link to="/login">
                  <i className="fa fa-user" aria-hidden="true"></i> Sign In
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
