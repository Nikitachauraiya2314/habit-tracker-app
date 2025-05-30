import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DashboardLayout = () => {
  const location = useLocation();

  const navItems = [
    { to: '/dashboard', icon: 'bi-speedometer2', label: 'Dashboard' },
    { to: '/manage-habits', icon: 'bi-list-check', label: 'Manage Habits' },
    { to: '/add-habit', icon: 'bi-plus-circle', label: 'Add Habit' },
    { to: '/settings', icon: 'bi-gear', label: 'Settings' },
  ];

  return (
    <div
      className="d-flex min-vh-100"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      {/* Sidebar */}
      <div
        className="text-white p-4 d-flex flex-column justify-content-between"
        style={{
          width: '250px',
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div>
          <h4 className="fw-bold text-center mb-4 text-white">🌱 HabitTracker</h4>
          <ul className="nav flex-column">
            {navItems.map((item) => (
              <li className="nav-item mb-2" key={item.to}>
                <Link
                  className={`nav-link d-flex align-items-center px-3 py-2 rounded ${
                    location.pathname === item.to ? 'bg-white text-dark fw-semibold' : 'text-white'
                  }`}
                  to={item.to}
                  style={{
                    transition: '0.3s ease',
                  }}
                >
                  <i className={`bi ${item.icon} me-2`} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center small text-white-50 mt-4">© 2025 HabitTracker</div>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          borderRadius: '20px',
          margin: '20px',
          backdropFilter: 'blur(6px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
