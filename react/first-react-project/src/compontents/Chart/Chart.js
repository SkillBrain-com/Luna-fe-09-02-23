import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={totalMaximum}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
