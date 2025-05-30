import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      toast.error('🚫 User with this email already exists!');
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      toast.success('✅ Registration successful!');
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: 'url("./public/bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          maxWidth: '400px',
          width: '100%',
          borderRadius: '1rem',
          backgroundColor: 'rgba(255, 255, 255, 0.3)'
        }}
      >
        <h3 className="mb-3 text-center">Create an Account</h3>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register 🚀
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            Already have an account? <Link to="/signin">Sign In</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
