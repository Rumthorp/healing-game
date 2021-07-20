import {
  generateInitialGooState,
  generateInitialSkillState
} from './dataUtils';
import {
  SkillNames,
  RhythmBarNames
} from '../static/names'

export default () => {
  const initialState = {};
  initialState.goo = generateInitialGooState(100);
  initialState.skills = generateInitialSkillState([
    SkillNames.FastHeal.displayName,
    SkillNames.LargeHeal.displayName,
    SkillNames.HealOverTime.displayName,
    SkillNames.ChainHeal.displayName,
    SkillNames.Meditate.displayName,
    SkillNames.Shield.displayName
  ]);
  initialState.startingRhythm = 20;
  initialState.currentRhythm = 20;
  initialState.maxRhythm = 100;
  initialState.skillQueue = {
    queue: [],
    hash: {}
  };
  for (let i = 0; i < 3; i ++) {
    initialState.skillQueue.hash[`${RhythmBarNames.RhythmBarSpellQueueButton}-${i}`] = {
      ref: null,
      active: false
    };
  }
  initialState.selectedGoo = 'Goo-1-1';
  return initialState;
};