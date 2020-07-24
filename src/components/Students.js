import React from "react";


const Students = (props) => {
  return (
    <div>
      <h1> {props.studentName}</h1>
      <div>
        <p>Hier komt alle data van: {props.studentName} </p>
      </div>
    </div>
  );
};

export default Students;
