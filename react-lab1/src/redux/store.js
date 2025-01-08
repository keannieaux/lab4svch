import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../redux/coursesSlice'; 
import userReducer from './userslice';

const store = configureStore({
  reducer: {
    courses: coursesReducer, 
    user: userReducer,
  },
});

export default store;