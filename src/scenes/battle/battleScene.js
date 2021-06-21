import ComponentClass from '../componentClass';
import GooGrid from './gooGrid/gooGridComponent';
import GodZone from './godZone/godZone';
import { SceneNames } from '../../static/names';
import Conductor from './conductor/conductor';
import GoblinAttack from './conductor/tracks/goblinAttack';
import BatAttack from './conductor/tracks/batAttack';
import GodZoneComponent from './godZone/godZone';

export default class BattleScene extends ComponentClass {
  constructor() {
    super(SceneNames.Battle);
    this.battleData = {};

    this.createAsset('component', new Conductor(GoblinAttack), true)
    this.createAsset('component', new GodZone(), true);
    this.createAsset('component', new GooGrid(), true);
    this.assets.Conductor.asset.start();
  }
};
