import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = '';
const delURL = (id) => `${URL}/${id}`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
      }
      return res.json();
    });
  return response;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
      }
      return res;
    });

  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await fetch(delURL(id), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
      }
      return res;
    });

  return id;
});
