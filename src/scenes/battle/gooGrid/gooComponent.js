import { 
  root,
  SceneManager
} from '../../../app';
import ComponentClass from '../../componentClass';
import { Constants } from '../../../static/constants';
import {
  ComponentNames,
  GooNames
} from '../../../static/names';

export default class GooComponent extends ComponentClass {
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
    );
    let maxHealth = SceneManager.data.goo[rowIndex][columnIndex].maxHealth;
    let numberOfHearts = Math.ceil(maxHealth / 4);
    let heartRemainder = maxHealth % 4;
    Constants.GooHeartPositions.forEach((positionObj, index) => {
      let heartAsset;
      if (index + 1 <= numberOfHearts) {
        heartAsset = this.createAsset(
          'animatedSprite', 
          {
            name: `${GooNames.GooHeart}-${index}-${rowIndex}-${columnIndex}`,
            x: positionObj.x,
            y: positionObj.y,
            width: Constants.GooHeartSize,
            height: Constants.GooHeartSize
          },
          true,
          root.loader.resources[GooNames.GooHeart].spritesheet.animations[GooNames.GooHeart]
        );
        if (index + 1 === numberOfHearts && heartRemainder !== 0) {
          heartAsset.gotoAndStop(heartRemainder);
          return;
        }
        heartAsset.gotoAndStop(4);
      }
    });
    let goo = this.createAsset(
      'sprite',
      {
        name: GooNames.GooSprite
      },
      false,
      root.loader.resources[GooNames.GooSprite].spritesheet.animations['GooIdle']
    );
    goo.setTransform(
      (Constants.GooBoxSize / 2) - ((goo.width * 3) / 2),
      (Constants.GooBoxSize / 2) - ((goo.height * 4) / 2),
      4,
      4
    );
    this.addAsset(goo.name);
  }
};