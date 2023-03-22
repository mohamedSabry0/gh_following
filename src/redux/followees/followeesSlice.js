import { createSlice } from '@reduxjs/toolkit';
import { fetchFollowees, addFollowee, removeFollowee } from './followeesThunks';

const initialState = {
  followees: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

/*
a helpful resource about matching:
https://redux-toolkit.js.org/api/createReducer#builderaddmatcher
*/

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const followeesSlice = createSlice({
  name: 'followees',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchFollowees.fulfilled, (state, action) => ({
        ...state,
        // TODO: handle (should be redundant) render
        // followees: state,
        status: 'succeeded',
      }))

      .addCase(addfollowee.fulfilled, (state, action) => ({
        ...state,
        followees: [...state.followees, action.payload],
        status: 'succeeded',
      }))

      .addCase(removefollowee.fulfilled, (state, action) => ({
        ...state,
        followees: [...state.followees.filter((item) => item.item_id !== action.payload)],
        status: 'succeeded',
      }))

      // for all pending actions that has the same callback functions
      .addMatcher(isPendingAction, (state) => ({ ...state, status: 'loading' }))

    // for all rejected actions that has the similar callback functions
      .addMatcher(isRejectedAction, (state, action) => ({
        ...state,
        error: action.error.message,
        status: 'failed',
      }));
  },
});

export const followeesState = (state) => state.followees;
export { fetchfollowees, addfollowee, removefollowee };
export default followeesSlice.reducer;
