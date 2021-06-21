import { 
  root,
  SceneManager
} from '../../../app';
import ComponentClass from '../../componentClass';
import {
  ComponentNames
} from '../../../static/names';
import { Constants } from '../../../static/constants';
import { getSkillByName } from './skills/skillUtils';

export default class SpellComponent extends ComponentClass {
  constructor(positionObj, rowIndex, columnIndex, spellDisplayName) {
    super(`${ComponentNames.SpellButton}-${rowIndex}-${columnIndex}`);

    this.createAsset(
      'sprite', 
      {
        name: 'test',
        x: Constants.GodZoneSpellPositions[rowIndex][columnIndex].x,
        y: Constants.GodZoneSpellPositions[rowIndex][columnIndex].y,
        width: Constants.GodZoneSpellButtonWidth,
        height: Constants.GodZoneSpellButtonWidth
      },
      true,
      root.loader.resources[getSkillByName(spellDisplayName).icon].texture,
    );
  }
};