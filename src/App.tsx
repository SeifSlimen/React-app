import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card /> 
      <Card /> 
      <Card /> 
      <Card /> 

    </div>
  );
}

