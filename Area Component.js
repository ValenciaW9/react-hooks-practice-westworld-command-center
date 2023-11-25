import React from "react";
import HostList from "./HostList";
import "../stylesheets/Area.css";

function Area({ areaName, hosts }) {
  const formattedName = areaName.replace(/_/g, " ").toUpperCase();

  return (
    <div className="area" id={areaName}>
      <h3 className="labels">{formattedName}</h3>
      <HostList hosts={hosts} />
    </div>
  );
}

export default Area;
