import React from "react";
import data from "../data";
import Card from "./card";

export default function Main() {
  return (
    <div className="cards-container">
      {data.map((item, index) => (
        <Card
          title={item.title}
          location={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          imgUrl={item.imageUrl}
          key={index}
          googleMapsUrl={item.googleMapsUrl}
        />
      ))}
    </div>
  );
}
