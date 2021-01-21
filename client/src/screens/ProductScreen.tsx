import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Image } from "react-bootstrap";
import products from "../products";
// import Rating from "../components/Rating";

const ProductScreen = ({ match }: { match: any }) => {
  const product = products.find((p) => p._id === match.params.id);
  console.log("prod name: ", { product });

  return (
    <>
      <p>Product detail screen</p>
      <Link to="/">Go Back</Link>
      {/* <Card.Title>{product.name}</Card.Title> */}
      {/* <Row>
        <Col lg={7}>
          <Card.Title>{product.name}</Card.Title>
        </Col>
        <Col lg={5}>{match.product.description}</Col>
      </Row> */}
    </>
  );
};

export default ProductScreen;
