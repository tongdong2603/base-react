import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'home',
  initialState: 0,
  reducers: {
    add: (state) => state + 1,
  },
});

export const { actions, reducer } = slice;
