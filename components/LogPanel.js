import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel() {
  const handleActivateAll = () => {
    // TODO: Implement activate all functionality
    Log.warn("Activating all hosts!");
  };

  const handleDecommissionAll = () => {
    // TODO: Implement decommission all functionality
    Log.notify("Decommissioning all hosts.");
  };

  return (
    <Segment className="log-panel">
      {/* Render log messages */}
      {/* <pre>{/* Render log messages here */}</pre> */}

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color... */}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button fluid color="green" content="Activate All" onClick={handleActivateAll} />
      <Button fluid color="red" content="Decommission All" onClick={handleDecommissionAll} />
    </Segment>
  );
}

export default LogPanel;