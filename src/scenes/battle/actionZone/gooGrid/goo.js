import { 
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import { Constants } from '../../../../static/constants';
import {
  ComponentNames,
  GooNames
} from '../../../../static/names';
import GooBar from './healthBar';

export default class Goo extends ComponentClass {
  constructor(rowIndex, columnIndex) {
    super(`${ComponentNames.Goo}-${rowIndex}-${columnIndex}`);
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.x = Constants.GooGridPositions[rowIndex][columnIndex].x;
    this.y = Constants.GooGridPositions[rowIndex][columnIndex].y;
    this.createAsset(
      'sprite', 
      {
        name: GooNames.GooBox,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize
      },
      true,
      root.loader.resources[GooNames.GooBox].texture,
    )
    .visible = false;
    this.createAsset(
      'component',
      new GooBar(rowIndex, columnIndex),
      true
    );
    let goo = this.createAsset(
      'sprite',
      {
        name: GooNames.GooSprite
      },
      false,
      root.loader.resources[GooNames.GooSprite].spritesheet.animations['GooIdle'][0]
    );
    goo.setTransform(
      (Constants.GooBoxSize / 2) - ((goo.width * 3) / 2),
      (Constants.GooBoxSize / 2) - ((goo.height * 2) / 2),
      4,
      4
    );
    this.addAsset(goo.name);
  }
};