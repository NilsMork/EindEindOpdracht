import React from "react";

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
  VictoryZoomContainer,
} from "victory";

import chartTheme from "../charttheme/ChartTheme";

function Chart({ dataForChart }) {
  return (
    <div className="Chart">
      <div className="legend">
        <div className="neongreen">Enjoyment</div>
        <div className="darkergreen">Difficulty</div>
      </div>
      <VictoryChart
        domainPadding={15}
        theme={chartTheme}
        containerComponent=
        {<VictoryZoomContainer />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={dataForChart}
            x="assignment"
            y="difficulty"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={dataForChart.map(
              (average) => average.assignment
            )}
          />
          <VictoryBar
            labelComponent={<VictoryTooltip />}
            data={dataForChart}
            x="assignment"
            y="enjoyment"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={dataForChart.map(
              (average) => average.assignment
            )}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{ tickLabels: { angle: -90 } }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={dataForChart.map(
            (averages) => averages.assignment
          )}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>

      <VictoryChart domainPadding={15} theme={chartTheme}
        containerComponent=
        {<VictoryZoomContainer />}>
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#399928", strokeWidth: 3 }
          }}
          data={dataForChart}
          x="assignment"
          y="difficulty"
        />
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#39ff14", strokeWidth: 3 }
          }}
          data={dataForChart}
          x="assignment"
          y="enjoyment"
        />
        <VictoryAxis
          style={{ tickLabels: { angle: -90 } }}
          tickValues={[1, 2, 3, 4]}
          tickFormat={dataForChart.map(
            (average) => average.assignment
          )}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </div>
  );
}

export default Chart;
