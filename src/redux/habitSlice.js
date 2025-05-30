// src/redux/habitSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('habits');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

const initialState = {
  habits: loadFromLocalStorage(),
};

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
      localStorage.setItem('habits', JSON.stringify(state.habits));
    },
    deleteHabit: (state, action) => {
      state.habits.splice(action.payload, 1);
      localStorage.setItem('habits', JSON.stringify(state.habits));
    },
    updateHabit: (state, action) => {
      const { index, updatedHabit } = action.payload;
      state.habits[index] = updatedHabit;
      localStorage.setItem('habits', JSON.stringify(state.habits));
    },
    toggleProgress: (state, action) => {
      const { habitIndex, dayIndex } = action.payload;
      state.habits[habitIndex].progress[dayIndex] = !state.habits[habitIndex].progress[dayIndex];
      localStorage.setItem('habits', JSON.stringify(state.habits));
    }
  }
});

export const { addHabit, deleteHabit, updateHabit, toggleProgress } = habitSlice.actions;
export default habitSlice.reducer;
