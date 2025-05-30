import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.body.className =
      storedTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className =
      newTheme === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    toast.info(`🌙 Theme switched to ${newTheme} mode`);
  };

  const handleClearHabits = () => {
    localStorage.removeItem("habits");
    toast.success("🗑️ All habits cleared!");
  };

  const handleLogout = () => {
    localStorage.clear(); // clear all
    toast.success("🔒 Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000); // delay for UX
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/purty-wood.png")',
        backgroundColor: theme === "dark" ? "#1c1c1c" : "#f0f8ff",
        backgroundSize: "cover",
        padding: "2rem",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "1rem",
          background:
            theme === "dark"
              ? "linear-gradient(to right, #2c3e50, #4ca1af)"
              : "linear-gradient(to right, #ffffff, #e0f7fa)",
        }}
      >
        <h3 className="text-center mb-4">⚙️ Settings</h3>

        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeToggle}
            id="themeSwitch"
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            Enable Dark Mode
          </label>
        </div>

        <button
          className="btn btn-danger w-100 mb-3"
          onClick={handleClearHabits}
        >
          🗑️ Clear All Habits
        </button>

        <button
          className="btn btn-outline-primary w-100"
          onClick={handleLogout}
        >
          🔒 Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
