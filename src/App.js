import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="container">
        <Routes>
          <Route path="/index.html" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
