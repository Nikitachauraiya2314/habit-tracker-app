import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const calculatePerformance = (habits, filterFn) => {
  let total = 0;
  let completed = 0;

  habits.forEach((habit) => {
    habit.progress?.forEach((done, index) => {
      if (filterFn(index)) {
        total++;
        if (done) completed++;
      }
    });
  });

  return total > 0 ? Math.round((completed / total) * 100) : 0;
};

const PerformanceCircle = ({ label }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    const today = new Date();
    const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

    let filterFn = () => true;

    if (label === "Today") {
      filterFn = (i) => i === dayIndex;
    } else if (label === "This week") {
      filterFn = (i) => i <= dayIndex;
    } else if (label === "Last week") {
      filterFn = () => false; // Placeholder
    }

    const percent = calculatePerformance(storedHabits, filterFn);
    setValue(percent);
  }, [label]);

  return (
    <div
      className="p-3 text-center shadow-sm"
      style={{
        width: 100,
        margin: "0 auto",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#222",
          trailColor: "#ececec",
          pathColor: "url(#gradient)",
          textSize: "18px",
        })}
      />

      {/* Gradient Definition */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0072ff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="mt-3">
        <div style={{ fontSize: "15px", fontWeight: 600 }}>{label}</div>
        <div className="text-muted" style={{ fontSize: "12px" }}>
          Goal: 80%
        </div>
      </div>
    </div>
  );
};

export default PerformanceCircle;
