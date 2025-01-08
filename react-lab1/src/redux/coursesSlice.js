import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse(state, action) {
      state.items.push(action.payload);
    },
    updateCourse(state, action) {
      const { id, updates } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
          state.items[index] = { ...state.items[index], ...updates }; // Merge updates with existing item
      } else {
          state.error = 'Course item not found';
      }
  },
    removeCourse(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addCourse, updateCourse, removeCourse, setError } = coursesSlice.actions;
export default coursesSlice.reducer;