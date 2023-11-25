import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Card
      className={isSelected ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
