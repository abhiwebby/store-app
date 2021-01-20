import React from "react";
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
            <Navbar.Brand href="/">Store App</Navbar.Brand>
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
                <Nav.Link href="/cart">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i> Cart
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fa fa-user" aria-hidden="true"></i> Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
