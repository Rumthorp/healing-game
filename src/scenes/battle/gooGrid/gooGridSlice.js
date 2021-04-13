import { createSlice } from '@reduxjs/toolkit';

import { NumberOfGoo } from '../../../constants/constants';

const generateInitialState = () => {
  const initialState = {
    goo: []
  };
  for(let i = 0; i < NumberOfGoo; i++) {
    initialState.goo.push({
      maxHealth: 32,
      currentHealth: 12,
      dead: false
    });
  }
  return initialState;
};

const gooGridSlice = createSlice({
  name: 'gooGrid',
  initialState: generateInitialState(),
  reducers: {
    changeGooHealth(state, action) {
      action.payload.forEach((obj) => {
        let goo = state.goo[obj.index];
        if (goo.dead) return;
        if (goo.currentHealth + action.payload.health > goo.maxHealth) {
          goo.currentHealth = goo.maxHealth;
          return;
        }
        if (goo.currentHealth + action.payload.health < 0) {
          goo.currentHealth = 0;
          goo.dead = true;
          return;
        }
        goo.currentHealth += action.payload.health; 
      })
    }
  }
});

export const { removeHealth, addHealth } = gooGridSlice.actions;

export default gooGridSlice.reducer;