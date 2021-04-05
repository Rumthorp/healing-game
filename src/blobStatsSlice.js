import { createSlice } from '@reduxjs/toolkit';

const generateInitialState = () => {
  const initialState = [];
  for(let i = 0; i < 16; i++) {
    initialState.push({
      maxHealth: 8,
      currentHealth: 3
    });
  }
  return initialState;
};

const blobStatsSlice = createSlice({
  name: 'blobStats',
  initialState: generateInitialState(),
  reducers: {
    removeHealth(state, action) {
      state[action.payload].currentHealth --;
    },
    addHealth(state, action) {
      state[action.payload].currentHealth ++;
    }
  }
});

export const { removeHealth, addHealth } = blobStatsSlice.actions;

export default blobStatsSlice.reducer;
