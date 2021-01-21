import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import products from "../products";
import Rating from "../components/Rating";

const Product = ({ product }: { product: any }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text className="price_tag">
          <i className="fa fa-inr" aria-hidden="true"></i> {product.price}
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
  );
};

export default Product;
