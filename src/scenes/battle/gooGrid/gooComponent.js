import { root } from '../../../app';
import ComponentClass from '../../componentClass';
import GooHeartsComponent from './gooHeartsComponent'
import { 
  GooComponentName,
  GooGridPositions,
  GooBoxName
} from '../../../constants/constants';

export default class GooComponent extends ComponentClass {
  constructor(index) {
    super(`${GooComponentName}-${index}`);

    this.x = GooGridPositions[index].x;
    this.y = GooGridPositions[index].y;
    this.createAsset('component', new GooHeartsComponent(), true);
    this.createAsset(
      'sprite', 
      {
        name: GooBoxName
      },
      true,
      root.loader.resources.gooBox.texture,
    );
  }
};