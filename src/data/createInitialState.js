import {
  generateInitialGooState,
  generateInitialSkillState
} from './dataUtils';
import { SkillNames } from '../static/names'

export default () => {
  const initialState = {};
  initialState.goo = generateInitialGooState(19);
  initialState.skills = generateInitialSkillState([
    SkillNames.FastHeal.displayName,
    SkillNames.LargeHeal.displayName,
    SkillNames.HealOverTime.displayName,
    SkillNames.ChainHeal.displayName,
    SkillNames.Meditate.displayName
  ]);
  return initialState;
};