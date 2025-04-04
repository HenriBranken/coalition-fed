import useHealth from '../../../context/useHealth';
import BPChartDateRange from './BPChartDateRange';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "../../../styles/BPChart.scss";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  Tooltip,
  Filler
);

const BPChart = () => {

  const { healthData } = useHealth();
  let bpData = healthData.diagnosis_history;
  
  const dateList = bpData.date.map(dateStr => {
    const date = new Date(dateStr);
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${month}, ${year}`;
  });
  bpData.date = [...dateList];

  const chartData = {
    labels: bpData.date,
    datasets: [
      {
        label: "Diastolic",
        data: bpData.diastolic,
        borderColor: "#7e6cab",
        borderWidth: 2,
        backgroundColor: "#8c6fe6",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
        pointHoverBorderColor: "#fff",
        pointBackgroundColor: "#8c6fe6",
        pointHoverBackgroundColor: "#8c6fe6",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.3,
        fill: false
      },
      {
        label: "Systolic",
        data: bpData.systolic,
        borderColor: "#c26eb4",
        borderWidth: 2,
        backgroundColor: "#e66fd2",
        pointBorderColor: "#fff",
        pointHoverBorderColor: "#fff",
        pointBorderWidth: 1,
        pointBackgroundColor: "#e66fd2",
        pointHoverBackgroundColor: "#e66fd2",
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.3,
        fill: false
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 470 / 222,
    plugins: {
      title: {
        display: false
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        grid: {
          color: "#cbc8d4",
          lineWidth: 1
        },
        title: {
          display: false
        },
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            family: "'Manrope', sans-serif",
            size: 12,
            lineHeight: "17px",
            weight: 400
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        title: {
          display: false
        },
        ticks: {
          color: "#072635",
          font: {
            family: "'Manrope', sans-serif",
            size: 12,
            lineHeight: "17px",
            weight: 400
          }
        }
      }
    }
  };

  return (
    <div className='bp-chart'>
      <BPChartDateRange />
      <Line data={chartData} options={options} />
    </div>
  )
};

export default BPChart;
