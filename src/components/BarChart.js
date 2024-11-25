import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ selectedBank }) => {
  const allData = {
    labels: [
      "Banco do Brasil (v2)",
      "Itaú (v2)",
      "Itaú (francesa)",
      "Sicoob (v2)",
      "Sicred (v2)",
      "Sicred (v3)",
      "Caixa",
      "Santander (v2)",
      "Banrisul",
      "Inter",
    ],
    datasets: [
      {
        label: "50 miliseg",
        data: [
          100, 200, 150, 300, 250, 180, 220, 230, 160, 210, 240, 190,
        ],
        backgroundColor: "green",
      },
      {
        label: "300 miliseg",
        data: [
          300, 500, 400, 450, 380, 350, 330, 370, 420, 390, 460, 410,
        ],
        backgroundColor: "yellow",
      },
      {
        label: "800 miliseg",
        data: [
          700, 800, 600, 750, 700, 730, 710, 780, 710, 740, 720, 690,
        ],
        backgroundColor: "red",
      },
    ],
  };

  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    if (selectedBank) {
      const index = allData.labels.indexOf(selectedBank);
      if (index !== -1) {
        setFilteredData({
          labels: [allData.labels[index]],
          datasets: allData.datasets.map((dataset) => ({
            ...dataset,
            data: [dataset.data[index]],
          })),
        });
      }
    } else {
      setFilteredData(allData);
    }
  }, [selectedBank]);

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        categoryPercentage: selectedBank ? 0.4 : 0.7,
        barPercentage: selectedBank ? 0.5 : 0.8,
      },
      y: {
        grid: {
          color: "#e0e0e0",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <div style={{ width: "100%", height: "100%" }}>
        <Bar data={filteredData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
