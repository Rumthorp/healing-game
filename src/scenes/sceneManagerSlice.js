import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Main Menu';

const sceneManagerSlice = createSlice({
  name: 'sceneManager',
  initialState: initialState,
  reducers: {
    changeScene: (state, action) => {
      state = action.payload;
    }
  }
})

export const { changeScene } = sceneManagerSlice.actions;

export default sceneManagerSlice.reducer;