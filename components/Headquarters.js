import React from "react";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters() {
  return (
    <div className="headquarters">
      <div className="headquarters-content">
        <ColdStorage />
      </div>
      <div className="headquarters-sidebar">
        <LogPanel />
      </div>
    </div>
  );
}

export default Headquarters;