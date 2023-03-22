import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = '';
const delURL = (id) => `${URL}/${id}`;

export const fetchfollowees = createAsyncThunk('followees/fetchfollowees', async () => {
  const response = await fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
      }
      return res.json();
    });
  return response;
});

export const addfollowee = createAsyncThunk('followees/addfollowee', async (followee) => {
  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(followee),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Error: ${res.status} ${res.statusText}`);
      }
      return res;
    });

  return followee;
});

export const removefollowee = createAsyncThunk('followees/removefollowee', async (id) => {
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
