import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import { useNavigate } from 'react-router-dom';


const AddHabit = () => {
  const [habit, setHabit] = useState({
    title: '',
    description: '',
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const existingHabits = JSON.parse(localStorage.getItem('habits')) || [];

  const newHabit = {
    ...habit,
    progress: [false, false, false, false, false, false, false],
  };

  const updatedHabits = [...existingHabits, newHabit];

  localStorage.setItem('habits', JSON.stringify(updatedHabits));
  setHabit({ title: '', description: '' });

  toast.success('✅ Habit added successfully!');

  setTimeout(() => {
    navigate('/manage-habits');
  }, 1500); // delay to let the toast appear briefly
};


  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(\"https://www.transparenttextures.com/patterns/connected.png\")',
        backgroundColor: '#eaf4ff',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        padding: '2rem',
      }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '1.2rem',
          background: 'linear-gradient(145deg, #ffffff, #dceeff)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        }}
      >
        <h3 className="text-center mb-4" style={{ color: '#0072ff' }}>
          ➕ Add a New Habit
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Habit Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={habit.title}
              onChange={handleChange}
              placeholder="e.g. Morning Walk"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              value={habit.description}
              onChange={handleChange}
              placeholder="e.g. Walk daily at 6 AM"
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              background: '#0072ff',
              color: '#fff',
              fontWeight: '500',
              borderRadius: '0.5rem',
            }}
          >
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
