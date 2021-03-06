import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data";

export default function App() {
  const Cards = data.map((card) => {
    return (
      <Card
        openSpots={card.openSpots}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        location={card.location}
        title={card.title}
        price={card.price}
        reviewCount={card.stats.reviewCount}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list"> {Cards}</section>
    </div>
  );
}
