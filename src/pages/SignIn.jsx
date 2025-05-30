import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      localStorage.setItem('loggedInUser', JSON.stringify(userFound));
      navigate('/dashboard');
    } else {
      toast.error('❌ Invalid email or password. Please try again.');
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url("./public/signin.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <h3 className="mb-4 text-center fw-bold" style={{ color: '#333' }}>
          Welcome Back 👋
        </h3>

        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-3 fw-semibold">
            Sign In 🚀
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Don't have an account?{' '}
            <Link to="/register" className="text-decoration-none">
              <strong>Register</strong>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
