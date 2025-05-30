import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.body.className =
      storedTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className =
      newTheme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  };

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm px-4 custom-navbar ${
        theme === 'dark' ? 'navbar-dark-theme' : 'navbar-light-theme'
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          HabitTracker 🌱
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item ms-3">
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="themeSwitch"
                  checked={theme === 'dark'}
                  onChange={handleThemeToggle}
                />
                <label className="form-check-label" htmlFor="themeSwitch">
                  {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
