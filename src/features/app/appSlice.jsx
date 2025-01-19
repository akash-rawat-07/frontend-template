import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    newTenderModalState: false,
    loading: false,
    error: null,
  },
  reducers: {
    toggleNewTenderModal: (state, action) => {
      state.newTenderModalState = action.payload;
    },
  },
});

export const { toggleNewTenderModal } = appSlice.actions;

export default appSlice.reducer;
