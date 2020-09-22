import React from "react";
import "./card-list.styles.css";

import { Card } from "../card/card.component.jsx";

const CardList = (users) => {
  return (
    <div>
      <div className="card-list">
        {Object.values(users).map((user) =>
          user.map((oneUser) => <Card key={oneUser.id} user={oneUser} />)
        )}
      </div>
    </div>
  );
};

export default CardList;
