import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  return (
    <div>
      <span className="card-container">
        <img
          alt="monsters"
          src={`https://api.adorable.io/avatars/200/${props.user.first_name}.png`}
          style={{ borderRadius: "10%", width: "50%", marginLeft: "60px" }}
        />
        <h1>
          {props.user.first_name} {props.user.last_name}
        </h1>
        <h2>{props.user.email}</h2>
      </span>
    </div>
  );
};
