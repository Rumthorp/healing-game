import { 
  root,
  SceneManager
} from '../../../app';
import ComponentClass from '../../componentClass';
import {
  ComponentNames,
  GodZoneNames
} from '../../../static/names';
import { Constants } from '../../../static/constants';
import SkillManager from './skills/skillManager';
import SpellBar from './spellBar';
import PulseBar from './pulseBar/pulseBar';

export default class GodZone extends ComponentClass {
  constructor() {
    super(ComponentNames.GodZone);

    this.createAsset(
      'component',
      new SkillManager(),
      true
    );
    this.createAsset(
      'sprite', 
      {
        name: 'test',
        width: Constants.GodZoneWidth + 10,
        height: Constants.AppHeight
      },
      true,
      root.loader.resources[GodZoneNames.GodZoneBackground].texture,
    );
    this.createAsset(
      'component',
      new SpellBar(),
      true
    );
    this.createAsset(
      'component',
      new PulseBar(),
      true
    );
  }
};