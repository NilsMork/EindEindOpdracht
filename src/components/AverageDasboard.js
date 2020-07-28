import React from "react";
import Chart from "./Chart";

function AverageDasboard({ studentList, assignmentList, AllData }) {
  const getDifficultyAverage = (assignment) => {
    const getDifficultyTotal = AllData
      .filter((item) => {
        return item.assignment === assignment;
      })
      .map((item) => item.difficulty)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getDifficultyTotal / studentList.length;
  };

  const getEnjoymentAverage = (assignment) => {
    const getEnjoymentTotal = AllData
      .filter((item) => {
        return item.assignment === assignment;
      })
      .map((item) => item.enjoyment)
      .reduce((currentTotal, grading) => {
        return grading + currentTotal;
      }, 0);
    return getEnjoymentTotal / studentList.length;
  };

  const assignmentAverageWithLabels = assignmentList.map((item) => ({
    assignment: item,
    difficulty: getDifficultyAverage(item),
    enjoyment: getEnjoymentAverage(item),
    label: `Difficulty: ${getDifficultyAverage(item).toFixed(
      0
    )} Enjoyment: ${getEnjoymentAverage(item).toFixed(0)}`,
  }));

  console.log("assignmentAverageWithLabels: ", assignmentAverageWithLabels);

  return (
    <div>
      <h1>~ Average Overview_</h1>
          <br />
      <Chart
        dataForChart={assignmentAverageWithLabels}
      />
    </div>
  );
}

export default AverageDasboard;
