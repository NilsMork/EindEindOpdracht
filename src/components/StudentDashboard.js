import React from "react";
import Chart from "./Chart"

function StudentDashboard({ student, enjoymentScore, assignmentList, difficultyScore }) {
  const assignmentAverageWithLabels = assignmentList.map((assignment) => ({
     assignment: assignment,
     difficulty: difficultyScore(student, assignment),
     enjoyment: enjoymentScore(student, assignment),
     label: `Difficulty: ${difficultyScore(student, assignment
     )} Enjoyment: ${enjoymentScore(student, assignment)}`,
  }));

  return (
     <div>
        <h1>~ {student}_</h1>
        <br />
        <Chart 
          dataForChart={assignmentAverageWithLabels} 
        />
     </div>
  );
}

export default StudentDashboard;
