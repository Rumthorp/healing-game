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
import SkillManager from './skillBar/skillManager';
import SkillBar from './skillBar/skillBar';
import PulseBar from './pulseBar/pulseBar';
import RhythmBar from './rhythmBar/rhythmBar';

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
        name: GodZoneNames.GodZoneBackground,
        x: -250,
        y: -150
      },
      true,
      root.loader.resources[GodZoneNames.GodZoneBackground].texture,
    );
    this.createAsset(
      'sprite',
      {
        name: GodZoneNames.GodZoneBackgroundMask,
        width: Constants.GodZoneWidth + 10,
        height: Constants.AppHeight
      },
      true,
      root.loader.resources[GodZoneNames.GodZoneBackgroundMask].texture
    );
    this.assets[GodZoneNames.GodZoneBackground].asset.mask = this.assets[GodZoneNames.GodZoneBackgroundMask].asset;
    this.createAsset(
      'component',
      new SkillBar(),
      true
    );
    this.createAsset(
      'component',
      new PulseBar(),
      true
    );
    this.createAsset(
      'component',
      new RhythmBar(),
      true
    );
    this.assets[ComponentNames.RhythmBar].asset.start();
  }
};