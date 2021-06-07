import ComponentClass from '../componentClass';
import GooGrid from './gooGrid/gooGridComponent';
import { SceneNames } from '../../static/names';
import Conductor from './conductor/conductor';
import GoblinAttack from './conductor/tracks/goblinAttack';
import BatAttack from './conductor/tracks/batAttack';

export default class BattleScene extends ComponentClass {
  constructor() {
    super(SceneNames.Battle);
    this.battleData = {};

    this.createAsset('component', new GooGrid(), true);
    this.conductor = new Conductor(BatAttack);
    this.conductor.startConductor();
  }
};
