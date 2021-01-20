import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="my-4">
        <Container>
          <Row>
            <Col lg={12} md="auto">
              <HomeScreen />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
