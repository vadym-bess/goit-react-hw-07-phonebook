import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    searchAction: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { searchAction } = filterSlice.actions;
