import { 
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  ComponentNames,
  GooNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';
import SkillButton from './skillButton';

export default class SkillBar extends ComponentClass {
  constructor() {
    super(ComponentNames.SkillBar);

    Constants.GodZoneSkillPositions.forEach((rowArray, rowIndex) => {
      rowArray.forEach((positionObj, columnIndex) => {
        this.createAsset('component', new SkillButton(positionObj, rowIndex, columnIndex, SceneManager.data.skills[rowIndex][columnIndex].name), true)
      });
    });
  }
};