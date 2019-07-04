/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const axios = require('axios');

class DashboardChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupSavings: [],
    };
  }

  componentDidMount() {
    const chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    axios.get('/savings')
      .then((data) => {
        data.data.map((elem) => {
          if (elem.Date.substring(5, 7) === '01') {
            chartData[0] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '02') {
            chartData[1] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '03') {
            chartData[2] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '04') {
            chartData[3] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '05') {
            chartData[4] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '06') {
            chartData[5] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '07') {
            chartData[6] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '08') {
            chartData[7] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '09') {
            chartData[8] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '10') {
            chartData[9] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '11') {
            chartData[10] += elem.amount;
          }
          if (elem.Date.substring(5, 7) === '12') {
            chartData[11] += elem.amount;
          }
        });
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({
          groupSavings: chartData,
        });
      });
  }


  chart() {
    const { groupSavings } = this.state;
    const sampleData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      legend: false,
      datasets: [
        {
          label: 'Group Total Saved (USD)',
          data: groupSavings,
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
              display: true,
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

export default DashboardChart;
