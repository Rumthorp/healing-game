import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    addTest(state, action) {
      state += 1;
    },
    subtractTest(state, action) {
      state -= 1;
    }
  }
});

export const { addTest, subtractTest } = testSlice.actions;

export default testSlice.reducer;
