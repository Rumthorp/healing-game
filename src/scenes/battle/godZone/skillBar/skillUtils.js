import {
  SceneManager
} from '../../../../app';
import {
  SceneNames,
  SkillNames
} from '../../../../static/names';
import LargeHeal from './largeHeal';
import FastHeal from './fastHeal';
import HealOverTime from './healOverTime';
import ChainHeal from './chainHeal';
import Meditate from './meditate';
import Shield from './shield';

export const getSkillByName = (name) => {
  if (name === SkillNames.LargeHeal.name || name === SkillNames.LargeHeal.displayName) return LargeHeal;
  if (name === SkillNames.FastHeal.name || name === SkillNames.FastHeal.displayName) return FastHeal;
  if (name === SkillNames.HealOverTime.name || name === SkillNames.HealOverTime.displayName) return HealOverTime;
  if (name === SkillNames.ChainHeal.name || name === SkillNames.ChainHeal.displayName) return ChainHeal;
  if (name === SkillNames.Meditate.name || name === SkillNames.Meditate.displayName) return Meditate;
  if (name === SkillNames.Shield.name || name === SkillNames.Shield.displayName) return Shield;
};