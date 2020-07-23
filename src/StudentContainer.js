import React, { useState } from "react";
import "./App.css";
import AllData from "./data/Data";
import { Link } from "react-router-dom";

function StudentContainer() {
  const [data] = useState(AllData);
  console.log(data);

  return (
    <div class="text">
      {data.map((props) => (
        <li key={props.Id}>
          <Link to={`/${props.Name}`}>{props.Name}</Link>
        </li>
      ))}
    </div>
  );
}
export default StudentContainer;
