import React, { useState, useEffect } from "react";
import Area from "./Area";

function WestworldMap() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // Fetch the area data from the '/areas' endpoint
    fetch("/areas")
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="map">
      {areas.map((area) => (
        <Area key={area.id} name={area.name} />
      ))}
    </div>
  );
}

export default WestworldMap;