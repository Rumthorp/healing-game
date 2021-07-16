import {
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  ComponentNames,
  GooVitalsNames,
  FontNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';

export default class HealthCircle extends ComponentClass {
  constructor(rowIndex, columnIndex, currentHealth) {
    super(ComponentNames.HealthGlobe);
    
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsHealthCircleSprite}-${rowIndex}-${columnIndex}`,
        width: Constants.GooVitalsCircleSize,
        height: Constants.GooVitalsCircleSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsCircleY,
        anchor: [.5, .5],
        tint: 0X520000
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsCircleSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsHealthCircleSpriteOutline}-${rowIndex}-${columnIndex}`,
        width: Constants.GooVitalsCircleSize,
        height: Constants.GooVitalsCircleSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsCircleY,
        anchor: [.5, .5],
        tint: 0X000000
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsCircleSpriteOutline].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsHeartIcon}-${rowIndex}-${columnIndex}`,
        height: Constants.GooVitalsHeartIconSize,
        width: Constants.GooVitalsHeartIconSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsHeartIconY,
        anchor: [.5, .5],
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsHeartIcon].spritesheet.animations[GooVitalsNames.GooVitalsHeartIcon][4]
    );
    this.createAsset(
      'text',
      {
        name: `${GooVitalsNames.GooVitalsHealthText}-${rowIndex}-${columnIndex}`,
        fontName: FontNames.ArialBlack,
        fontSize: Constants.GooVitalsTextSize,
        x: Constants.GooVitalsTextX,
        y: Constants.GooVitalsTextY,
        anchor: [.5, .5],
        text: currentHealth
      },
      true
    );
  }
};