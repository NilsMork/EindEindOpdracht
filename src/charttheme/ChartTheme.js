const chartTheme = {
  axis: {
  style: {
        axis: {
           strokeWidth: 2,
        },
        axisLabel: {
           textAnchor: "middle",
           fontFamily: "Lucida Console, Monaco, monospace",
           fontSize: 12,
           letterSpacing: "normal",
           padding: 8,
        },
        grid: {
           fill: "none",
           stroke: "#165c0a",
        },
        tickLabels: {
           fontFamily: "Lucida Console, Monaco, monospace",
           fontSize: 9,
           textAnchor: "end",
           padding: 15,
           fill: "#39ff14",
           stroke: "transparent",
        },
     },
     width: 350,
     height: 500,
     padding: 50,
  },

  chart: {
     width: 800,
     height: 300,
     padding: 50,
  },

  group: {
     colorScale: ["#39ff14", "#399928"],
     width: 350,
     height: 350,
     padding: 50,
  },
}

export default chartTheme;