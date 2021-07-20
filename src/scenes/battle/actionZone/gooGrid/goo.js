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
import HealthCircle from './HealthCircle';
import ShieldCircle from './ShieldCircle';
import { onGooClick } from './gooUtils';

export default class Goo extends ComponentClass {
  constructor(rowIndex, columnIndex) {
    super(`${ComponentNames.Goo}-${rowIndex}-${columnIndex}`);
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
    this.x = Constants.GooGridPositions[rowIndex][columnIndex].x;
    this.y = Constants.GooGridPositions[rowIndex][columnIndex].y;
    const gooData = SceneManager.data.goo[rowIndex][columnIndex];
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', () => {
      SceneManager.data.selectedGoo = this.name;
      onGooClick(rowIndex, columnIndex);
    });
    this.createAsset(
      'sprite', 
      {
        name: GooNames.GooBox,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        alpha: 0
      },
      true,
      root.loader.resources[GooNames.GooBox].texture,
    )
    if (rowIndex === 1 && columnIndex === 1) this.assets[GooNames.GooBox].asset.alpha = 1;
    this.createAsset(
      'component',
      new ShieldCircle(rowIndex, columnIndex, gooData.shield),
      true
    )
    .visible = false;
    this.createAsset(
      'component',
      new HealthCircle(rowIndex, columnIndex, gooData.currentHealth),
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