/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class RandyChart extends Component {
  constructor(props) {
    super(props);
  }

  chart() {
    const { randyChartData } = this.props;
    const sampleData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      legend: false,
      datasets: [
        {
          label: 'Total Saved (USD)',
          data: [randyChartData],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(61,75,255)',
          pointBackgroundColor: 'rgba(61,75,255)',
          lineTension: 0,
        },
      ],
    };

    return (
      <div className="chartjs">
        <Line
          data={sampleData}
          height={350}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
            tooltips: {
              enabled: false,
            },
          }
          }
        />
      </div>

    );
  }

  render() {
    return (
      this.chart()
    );
  }
}

export default RandyChart;
