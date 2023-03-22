import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state, action) {
      // although the immer library is available there is a linter rule for param-reassignment
      return {
        ...state,
        items: action.payload === 'Under construction'
          ? 'Under construction'
          : state.items,
      };
    },
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
