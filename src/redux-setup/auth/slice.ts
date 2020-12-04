import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: true,
  },
  reducers: {
    logout: (state) => ({ ...state, isLogin: false }),
  },
});

export const { actions, reducer } = slice;
