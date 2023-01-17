import React from "react";
import Welcome from "../images/Welcome-11.gif";
import "./Greetings.css";

function Greetings() {
  return (
    <div className="hello">
      <img
        style={{ maxWidth: "100%", height: "700px", marginLeft: "350px" }}
        src={Welcome}
      />
    </div>
  );
}

export default Greetings;
