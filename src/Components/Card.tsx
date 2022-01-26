import React from "react";

export default function Card(props: any) {
  let badgetext: any;
  if (props.openSpots === 0) {
    badgetext = "SOLD OUT";
  } else if (props.location === "Online") {
    badgetext = "ONLINE";
  }
  return (
    <div className="card">
      {badgetext && <div className="card--badge"> {badgetext} </div>}

      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
