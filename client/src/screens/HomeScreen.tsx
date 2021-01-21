import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <h4>Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col key={product._id} lg={3} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
