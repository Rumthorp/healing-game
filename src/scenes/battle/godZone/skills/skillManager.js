import ComponentClass from '../../../componentClass';
import {
  ComponentNames,
  SkillNames
} from '../../../../static/names';
import LargeHeal from './largeHeal';
import FastHeal from './fastHeal';
import HealOverTime from './healOverTime';
import ChainHeal from './chainHeal';
import Meditate from './meditate';

export default class SkillManager extends ComponentClass {
  constructor() {
    super(ComponentNames.SkillManager);
  }
}