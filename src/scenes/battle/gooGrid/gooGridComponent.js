import { SceneManager } from '../../../app';
import ComponentClass from '../../componentClass';
import GooComponent from './gooComponent';
import { ComponentNames } from '../../../static/names';
import { Constants } from '../../../static/constants';

export default class GooGridScene extends ComponentClass {
  constructor () {
    super(ComponentNames.GooGrid);
    this.x = Constants.GooGridX;
    this.y = Constants.GooGridY;
    SceneManager.data.goo.forEach((gooRowArray, rowIndex) => {
      gooRowArray.forEach((gooData, columnIndex) => {
        this.createAsset('component', new GooComponent(rowIndex, columnIndex), true);
      });
    });
  }
}