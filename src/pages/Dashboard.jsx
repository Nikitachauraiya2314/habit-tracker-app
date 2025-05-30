import React from "react";
import BarChart from "../components/BarChart";
import PerformanceCircle from "../components/PerformanceCircle";
import DateRangeCalendar from "../components/DateRangeCalendar";
import HabitTable from "../components/HabitTable";

const Dashboard = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="container p-2 shadow-lg"
        style={{
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#5b6dfa",
            fontSize: "2rem",
          }}
        >
          🌟 Your Dashboard — Keep Going, You're Doing Great!
        </h2>

        {/* Top Row: Charts and Calendar */}
        <div className="row g-4">
          {/* Bar Chart */}
          <div className="col-md-4">
            <div
              className="card p-4 h-100 text-center border-0"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h5 className="text-primary mb-3">Weekly Habit Progress</h5>
              <BarChart />
            </div>
          </div>

          {/* Performance Circles */}
          <div className="col-md-4">
            <div
              className="card pt-4 h-100 text-center border-0"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h5 className="text-primary mb-3">Your Performance</h5>
              <div className="d-flex justify-content-around">
                <PerformanceCircle value={100} label="Last Week" />
                <PerformanceCircle value={100} label="This Week" />
                <PerformanceCircle value={100} label="Today" />
              </div>
              <p className="mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
                “Small steps every day lead to big changes.”
              </p>
            </div>
          </div>

          {/* Calendar */}
          <div className="col-md-4">
            <div
              className="card p-4 h-100 text-center border-0"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h5 className="text-primary mb-3">Track by Date</h5>
              <DateRangeCalendar />
            </div>
          </div>
        </div>

        {/* Habit Table */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="card p-4 border-0"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h5 className="text-primary text-center mb-4">
              🗓️  Weekly Habit Tracker
              </h5>
              <HabitTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
