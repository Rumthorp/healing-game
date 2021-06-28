import { SceneManager } from '../../app';
import ComponentClass from '../componentClass';
import GooGrid from './gooGrid/gooGridComponent';
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
    this.battleData = {};
    this.createAsset('component', new GodZone(), true);
    this.createAsset('component', new GooGrid(), true);
    SceneManager.conductor.loadTrack(IrishFair, .3);
    SceneManager.conductor.start();
  }
};
