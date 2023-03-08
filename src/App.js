import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Form></Form>
    </div>
  );
}

export default App;
