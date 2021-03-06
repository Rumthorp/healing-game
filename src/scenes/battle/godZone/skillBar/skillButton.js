import { 
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  ComponentNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';
import { getSkillByName } from './skillUtils';
import { addSkillToQueue } from '../rhythmBar/rhythmBarUtils';

export default class SkillButton extends ComponentClass {
  constructor(positionObj, rowIndex, columnIndex, skillDisplayName) {
    super(`${ComponentNames.SkillButton}-${rowIndex}-${columnIndex}`);
    this.interactive = true;
    this.buttonMode = true;
    this.skill = getSkillByName(skillDisplayName);
    this.createAsset(
      'sprite', 
      {
        name: this.skill.name,
        x: Constants.GodZoneSkillPositions[rowIndex][columnIndex].x,
        y: Constants.GodZoneSkillPositions[rowIndex][columnIndex].y,
        width: Constants.GodZoneSkillButtonWidth,
        height: Constants.GodZoneSkillButtonWidth
      },
      true,
      root.loader.resources[this.skill.iconName].texture,
    )
    this.on(
      'click',
      () => addSkillToQueue(this.skill),
      true
    );
  }
};