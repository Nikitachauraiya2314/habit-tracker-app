import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const completedData = weekDays.map((_, dayIndex) =>
    habits.reduce(
      (count, habit) => (habit.progress?.[dayIndex] ? count + 1 : count),
      0
    )
  );

  const missedData = weekDays.map((_, dayIndex) =>
    habits.reduce(
      (count, habit) =>
        habit.progress?.[dayIndex] === false ? count + 1 : count,
      0
    )
  );

  const data = {
    labels: weekDays,
    datasets: [
      {
        label: "Completed",
        data: completedData,
        backgroundColor: "#38b6ff", 
        borderRadius: 6,
        barThickness: 20,
      },
      {
        label: "Missed",
        data: missedData.map((value) => -value),
        backgroundColor: "#ff4b91", 
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#444", 
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "#444",
          callback: (value) => Math.abs(value),
        },
      },
      x: {
        ticks: {
          color: "#444",
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "300px",
        padding: "10px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(6px)",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
