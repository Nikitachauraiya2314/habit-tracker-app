import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const quotes = [
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
  "Your habits will determine your future. – Jack Canfield",
  "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun",
];

const Landing = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100 px-3"
      style={{
        backgroundImage: "url('./public/bg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="mb-4" style={{ fontSize: "4rem" }}>
        🌱
      </div>
      <h1
        className="display-3 fw-bold mb-3"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
      >
        HabitTrack
      </h1>
      <p className="lead mb-4" style={{ maxWidth: "500px" }}>
        Build better habits, track your weekly goals, and grow into your best self — one day at a time.
      </p>

      <blockquote className="blockquote mb-4" style={{ maxWidth: "600px" }}>
        <p className="mb-0">{quotes[currentQuoteIndex]}</p>
      </blockquote>

      <div className="d-flex gap-3">
        <Link to="/signin" className="btn btn-light btn-lg px-4">
          Sign In
        </Link>
        <Link to="/register" className="btn btn-outline-light btn-lg px-4">
          Register
        </Link>
      </div>

      <p className="mt-5 text-white-50" style={{ fontSize: "14px" }}>
        © 2025 HabitTrack. All rights reserved.
      </p>
    </div>
  );
};

export default Landing;
