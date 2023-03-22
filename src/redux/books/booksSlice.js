import { createSlice } from '@reduxjs/toolkit';
import unique from '../../util/unique';
import { fetchBooks, addBook, removeBook } from './booksThunks';

const initialState = {
  books: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

/*
a helpful resource about matching:
https://redux-toolkit.js.org/api/createReducer#builderaddmatcher
*/

const isPendingAction = (action) => action.type.endsWith('/pending');
const isRejectedAction = (action) => action.type.endsWith('/rejected');

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        // TODO: handle (should be redundant) render
        books: unique(action.payload, state.books),
        status: 'succeeded',
      }))

      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
        status: 'succeeded',
      }))

      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books.filter((item) => item.item_id !== action.payload)],
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

export const booksState = (state) => state.books;
export { fetchBooks, addBook, removeBook };
export default booksSlice.reducer;
