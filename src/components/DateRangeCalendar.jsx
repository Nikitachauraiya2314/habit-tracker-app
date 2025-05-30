import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../components/custom.css"; 

const DateRangeCalendar = () => {
  const [dateRange, setDateRange] = useState([
    new Date(2025, 4, 4),
    new Date(2025, 4, 4),
  ]);

  return (
    <div
      className="calendar-container p-4 text-center"
      style={{
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h5 className="fw-semibold text-primary mb-3">📅 April 2025</h5>

      <Calendar
        selectRange={true}
        value={dateRange}
        onChange={setDateRange}
        minDetail="month"
        maxDetail="month"
        view="month"
        tileClassName={({ date }) => {
          const [start, end] = dateRange;
          if (date >= start && date <= end) {
            return "highlight";
          }
        }}
        className="rounded-calendar"
      />
    </div>
  );
};

export default DateRangeCalendar;
