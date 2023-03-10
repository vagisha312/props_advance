import React from "react";
import Avtar from "./Avtar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailinfo={props.tel} />
        <Details detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
