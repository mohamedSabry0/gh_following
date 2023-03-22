import { configureStore } from '@reduxjs/toolkit';
import followeesReducer from './followees/followeesSlice';

export default configureStore({
  reducer: {
    followees: followeesReducer,
  },
});
