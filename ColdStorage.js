import React from "react";
import HostList from "./HostList";
import "../stylesheets/ColdStorage.css";

function ColdStorage({ hosts }) {
  return (
    <div className="cold-storage">
      <h3 className="labels">Cold Storage</h3>
      <HostList hosts={hosts} />
    </div>
  );
}

export default ColdStorage;