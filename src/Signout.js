import { React } from "react";
import signout from "./images/signout.webp";

function Signout() {
  return (
    <div>
      <center style={{ margin: "100px" }}>
        <img height="300px"  src={signout} />
        <h3 style={{ color: "blue" }}>
          <b>Logging off.....</b>
        </h3>
      </center>
    </div>
  );
}
export default Signout;
