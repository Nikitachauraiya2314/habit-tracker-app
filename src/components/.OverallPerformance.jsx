import React, { useEffect, useState } from "react";

const OverallPerformance = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const habits = JSON.parse(localStorage.getItem("habits")) || [];

    let total = 0;
    let completed = 0;

    habits.forEach((habit) => {
      habit.progress?.forEach((done) => {
        total++;
        if (done) completed++;
      });
    });

    const overallPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
    setPercent(overallPercent);
  }, []);

  return (
    <div className="text-center mt-3">
      <strong>Overall All Time Performance: {percent}%</strong>
    </div>
  );
};

export default OverallPerformance;
