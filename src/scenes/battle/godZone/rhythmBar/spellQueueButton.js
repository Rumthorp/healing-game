import { root } from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  RhythmBarNames,
  SkillNames,
  FontNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';
import { cancelSkillFromQueue } from './rhythmBarUtils';

export default class SpellQueueButton extends ComponentClass {
  constructor(index) {
    super(`${RhythmBarNames.RhythmBarSpellQueueButton}-${index}`);
    this.alpha = 0;
    this.createAsset(
      'sprite',
      {
        name: RhythmBarNames.RhythmBarSpellQueueButtonIcon,
        height: Constants.RhythmBarSpellQueueButtonSize,
        width: Constants.RhythmBarSpellQueueButtonSize,
        x: 0,
        y: 0
      },
      true,
      root.loader.resources[SkillNames.FastHeal.iconName].texture
    );
    this.createAsset(
      'text',
      {
        name: RhythmBarNames.RhythmBarSpellQueueButtonCountdown,
        fontName: FontNames.ArialBlack,
        fontSize: 70,
        x: (Constants.RhythmBarSpellQueueButtonSize / 2),
        y: Constants.RhythmBarSpellQueueButtonSize / 2,
        anchor: [.5, .5],
        text: ''
      },
      true
    );
    this.on(
      'click',
      () => cancelSkillFromQueue(this.name),
      true
    );
  }
};


// const skill = getSkillByName(skillDisplayName);
// this.createAsset(
//   'sprite', 
//   {
//     name: skill.name,
//     x: Constants.GodZoneSkillPositions[rowIndex][columnIndex].x,
//     y: Constants.GodZoneSkillPositions[rowIndex][columnIndex].y,
//     width: Constants.GodZoneSkillButtonWidth,
//     height: Constants.GodZoneSkillButtonWidth
//   },
//   true,
//   root.loader.resources[SkillNames.FastHeal.iconName].texture,
// )