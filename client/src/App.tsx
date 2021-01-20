import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h1>Hello store app...</h1>
      <button className="btn btn-danger">Submit</button>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
