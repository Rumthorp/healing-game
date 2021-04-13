import { createSlice } from '@reduxjs/toolkit';

const initialState = ['Main Menu'];

const sceneManagerSlice = createSlice({
  name: 'sceneManager',
  initialState: initialState,
  reducers: {
    addScene: (state, action) => {
      if (!state.find(sceneName => action.payload === sceneName)) {
        state.unshift(action.payload);
        return state;
      }
    },
    removeScene: (state, action) => {
      let sceneIndex;
      if (action.payload) sceneIndex = state.findIndex(scene => action.payload === scene);
      if (sceneIndex !== -1) {
        state.splice(sceneIndex, sceneIndex + 1);
        return state;
      }
      if (action.payload && sceneIndex === -1) return;
      state.shift();
      return state;
    },
    isolateScenes: (state, action) => {
      state = action.payload;
    },
    resetScenes: (state) => {
      return initialState;
    }
  }
})

export const { addScene, removeScene, isolateScenes } = sceneManagerSlice.actions;

export default sceneManagerSlice.reducer;