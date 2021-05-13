import { SceneManager } from '../../../app';
import ComponentClass from '../../componentClass';
import GooComponent from './gooComponent';
import { ComponentNames } from '../../../static/names';

export default class GooGridScene extends ComponentClass {
  constructor () {
    super(ComponentNames.GooGrid);

    SceneManager.data.goo.forEach((gooRowArray, rowIndex) => {
      gooRowArray.forEach((gooData, columnIndex) => {
        this.createAsset('component', new GooComponent(rowIndex, columnIndex), true);
      });
    });
  }
}