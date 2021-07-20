import { SceneManager } from '../../app';
import ComponentClass from '../componentClass';
import ActionZone from './actionZone/actionZone';
import GodZone from './godZone/godZone';
import {
  SceneNames,
  ComponentNames
} from '../../static/names';
import GoblinAttack from '../../conductor/tracks/goblinAttack';
import BatAttack from '../../conductor/tracks/batAttack';
import GodZoneComponent from './godZone/godZone';
import IrishFair from '../../conductor/tracks/irishFair';

export default class BattleScene extends ComponentClass {
  constructor() {
    super(SceneNames.Battle);
    SceneManager.conductor.loadTrack(GoblinAttack, .3);
    this.createAsset('component', new ActionZone(), true);
    this.createAsset('component', new GodZone(), true);
    SceneManager.conductor.start();
    SceneManager.tickerMetaData[ComponentNames.RhythmBar].active = true;
  }
};
