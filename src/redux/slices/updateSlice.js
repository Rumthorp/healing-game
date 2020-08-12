import { createSlice } from '@reduxjs/toolkit';

let updateId = 0;

const updateSlice = createSlice({
  name: 'updateSlice',
  initialState: {},
  reducers: {
    addUpdate(state, action) {
      state[updateId] = action.payload;
      updateId++;
    },
    removeUpdates(state, action) {
      action.payload.forEach((updateId) => {
        delete state[updateId];
      });
    }
  }
});

export const { addUpdate, removeUpdates } = updateSlice.actions;

export default updateSlice.reducer;
