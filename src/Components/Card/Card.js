import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

import "./card.css";

function Card(props) {
  const url = `/Home/SinglePage/${props.id}`;
  return (
    <div className="mainDiv" key={props.id}>
      <div className="img_card">
        <img
          className="listImage"
          src={`${props.imageUrl}?v=${props.id}`}
          alt="animalImage"
        />
        <div>
          <b>
            {props.name} {props.lastName}
          </b>
        </div>
        <p>{props.title}</p>

        <Link   to={url}>
          <Button > Read more... </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
