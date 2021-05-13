import ComponentClass from '../componentClass';
import GooGrid from './gooGrid/gooGridComponent';
import { SceneNames } from '../../static/names';

export default class BattleScene extends ComponentClass {
  constructor() {
    super(SceneNames.Battle);

    this.createAsset('component', new GooGrid(), true);
  }
};
