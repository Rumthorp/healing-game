import ComponentClass from '../componentClass';
import GooGrid from './gooGrid/gooGridComponent';
import { BattleSceneName } from '../../constants/constants';

export default class BattleScene extends ComponentClass {
  constructor() {
    super(BattleSceneName);

    this.createAsset('component', new GooGrid(), true);
  }
};
