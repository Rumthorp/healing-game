import ComponentClass from '../../componentClass';
import GooComponent from './gooComponent';
import { 
  GooGridComponentName,
  NumberOfGoo
} from '../../../constants/constants';

export default class gooGridScene extends ComponentClass {
  constructor () {
    super(GooGridComponentName);

    for (let i = 0; i < 16; i ++) {
      this.createAsset('component', new GooComponent(i), true);
    }
  }
}