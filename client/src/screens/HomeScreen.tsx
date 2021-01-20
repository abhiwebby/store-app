import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <h4>Latest Products</h4>
      <Row>
        {products.map((product) => (
          <Col key={product._id} lg={3} className="mb-4">
            <Card>
              <Card.Link href={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
              </Card.Link>
              <Card.Body>
                <Card.Link href={`/product/${product._id}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Card.Link>
                <Card.Text className="price_tag">
                  <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                  {product.price}
                </Card.Text>
                <Card.Text>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} Reviews`}
                  />
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
