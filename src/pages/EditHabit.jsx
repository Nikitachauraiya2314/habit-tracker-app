import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const EditHabit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habit, setHabit] = useState({ title: '', description: '' });

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    const habitToEdit = storedHabits[id];
    if (habitToEdit) {
      setHabit(habitToEdit);
    }
  }, [id]);

  const handleChange = (e) => {
    setHabit({ ...habit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    storedHabits[id] = habit;

    localStorage.setItem('habits', JSON.stringify(storedHabits));

    toast.success('✅ Habit updated successfully!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500); // short delay so user can see toast
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">✏️ Edit Habit</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Habit Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={habit.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={habit.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Update Habit</button>
      </form>
    </div>
  );
};

export default EditHabit;
