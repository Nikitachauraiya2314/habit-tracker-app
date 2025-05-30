import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageHabits = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedHabits = habits.filter((_, index) => index !== indexToDelete);
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  const handleToggleDay = (habitIndex, dayIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].progress[dayIndex] =
      !updatedHabits[habitIndex].progress[dayIndex];
    setHabits(updatedHabits);
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  };

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div
      className="py-5"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/white-wall-3.png')",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        paddingInline: "1rem",
      }}
    >
      <div className="container">
        <h2 className="mb-4 text-center text-primary">🌱 Manage Your Habits</h2>

        {habits.length === 0 ? (
          <p className="text-center text-muted">No habits added yet. Go to Add Habit page.</p>
        ) : (
          <div className="list-group">
            {habits.map((habit, habitIndex) => (
              <div
                key={habitIndex}
                className="list-group-item d-flex justify-content-between align-items-center flex-wrap shadow-sm rounded mb-3"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e3e6f0",
                  padding: "1rem",
                }}
              >
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-dark">{habit.title}</h5>
                  <p className="mb-2 text-muted" style={{ fontSize: "14px" }}>
                    {habit.description}
                  </p>
                  <div className="d-flex gap-2 align-items-center flex-wrap">
                    {days.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="rounded-circle d-flex justify-content-center align-items-center shadow-sm"
                        onClick={() => handleToggleDay(habitIndex, dayIndex)}
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: habit.progress?.[dayIndex]
                            ? "#00b894"
                            : "#dee2e6",
                          color: habit.progress?.[dayIndex] ? "#fff" : "#495057",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "bold",
                          transition: "0.2s ease",
                        }}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex flex-column align-items-end gap-2 ms-3">
                  <Link
                    to={`/edit-habit/${habitIndex}`}
                    className="btn btn-sm btn-outline-primary"
                    title="Edit"
                  >
                    ✏️
                  </Link>
                  <button
                    onClick={() => handleDelete(habitIndex)}
                    className="btn btn-sm btn-outline-danger"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageHabits;
