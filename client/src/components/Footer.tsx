import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="bgBlack">
      <Row className="justify-content-md-center">
        <Col lg="12" md="auto">
          <p className="text-center p-2 m-0">Copyright &copy; 2021</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
