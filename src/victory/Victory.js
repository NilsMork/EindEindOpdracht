import React from 'react';
import AllData from '../AllData'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const assignmentList = AllData.map((item) => item.assignment);
console.log("assignmentList: ", assignmentList);

const sortAssignment = [...new Set(AllData.map((item) => item.assignment))];
console.log("sortAssignment: ", sortAssignment);

// const data = [
//     {quarter: 1, earnings: 13000},
//     {quarter: 2, earnings: 16500},
//     {quarter: 3, earnings: 14250},
//     {quarter: 4, earnings: 19000}
//   ];
  
  // class Victory extends React.Component {
  //   render() {
  //     return (
  //       <VictoryChart domainPadding={15}>
  //          <VictoryAxis
  //           fixLabelOverlap
  //           style={{ tickLabels: { padding: 4, fontSize: 5, angle: 90  } }}
  //         // tickValues specifies both the number of ticks and where
  //         // they are placed on the axis
  //         // tickValues={[1, 2, 3, 4]}
  //         tickValues={sortAssignment}
  //         tickFormat={sortAssignment}
          
  //       />
  //       {/* <VictoryAxis
  //         dependentAxis
  //         // tickFormat specifies how ticks should be displayed
  //         // tickFormat={(x) => (`$${x / 1000}k`)}
  //       /> */}
  //       <VictoryBar
  //         data={AllData}
  //         // data accessor for x values
  //         x="quarter"
  //         // data accessor for y values
  //         y="earnings"
  //       />
  //       </VictoryChart>
  //     )
  //   }
  // }
  // export default Victory