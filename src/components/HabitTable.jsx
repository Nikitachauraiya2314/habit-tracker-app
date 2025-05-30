import React, { useEffect, useState } from "react";

const HabitTable = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(stored);
  }, []);

  const handleToggle = (habitIndex, dayIndex) => {
    const updated = [...habits];
    updated[habitIndex].progress[dayIndex] = !updated[habitIndex].progress[dayIndex];
    setHabits(updated);
    localStorage.setItem("habits", JSON.stringify(updated));
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div
      className="p-4 shadow-sm"
      style={{
        borderRadius: "16px",
        background: "linear-gradient(145deg, #f9f9f9, #e6e6e6)",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="table-responsive">
        <table className="table table-striped table-hover text-center align-middle">
          <thead
            style={{
              background: "#0072ff",
              color: "#fff",
              fontWeight: "500",
            }}
          >
            <tr>
              <th className="text-start ps-4">Habit</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((habit, i) => (
              <tr key={i}>
                <td className="text-start fw-semibold ps-4">{habit.title}</td>
                {days.map((_, d) => (
                  <td key={d}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={habit.progress?.[d] || false}
                      onChange={() => handleToggle(i, d)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HabitTable;
