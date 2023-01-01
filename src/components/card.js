import React from "react";
import LocationIcon from "./../locationIcon.png";

export default function Card(props) {
  return (
    <div className="single--card">
      <div>
        <img className="site--img" src={props.imgUrl} />
      </div>
      <div className="about">
        <div className="country-con">
          <img className="location--icon" src={LocationIcon} />
          <span className="country">{props.location}</span>
          <a href={props.googleMapsUrl} className="viewOnMaps">
            View on google maps
          </a>
        </div>
        <div className="site-name">{props.title}</div>
        <div>
          <div className="date">
            {props.startDate}-{props.endDate}
          </div>
          <div className="content">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
