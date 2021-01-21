import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-4">
        <Container>
          <Row>
            <Col lg={12} md="auto">
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/" exact component={HomeScreen} />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
