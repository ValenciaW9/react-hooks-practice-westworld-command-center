import React from "react";
import Host from "./Host";
import "../stylesheets/HostList.css";

function HostList({ hosts }) {
  return (
    <div className="host-list">
      {hosts.map((host) => (
        <Host key={host.id} host={host} />
      ))}
    </div>
  );
}

export default HostList;
