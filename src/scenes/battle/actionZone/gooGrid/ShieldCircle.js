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

export default class ShieldCircle extends ComponentClass {
  constructor(rowIndex, columnIndex, shield) {
    super(ComponentNames.HealthGlobe);
    
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsShieldCircleSprite}-${rowIndex}-${columnIndex}`,
        width: Constants.GooVitalsCircleSize,
        height: Constants.GooVitalsCircleSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsCircleY,
        anchor: [.5, .5],
        tint: 0X7d7d7d
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsCircleSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsShieldCircleSpriteOutline}-${rowIndex}-${columnIndex}`,
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
        name: `${GooVitalsNames.GooVitalsShieldIcon}-${rowIndex}-${columnIndex}`,
        height: Constants.GooVitalsShieldIconSize,
        width: Constants.GooVitalsShieldIconSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsShieldIconY,
        anchor: [.5, .5]
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsShieldIcon].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${GooVitalsNames.GooVitalsShieldIconOutline}-${rowIndex}-${columnIndex}`,
        height: Constants.GooVitalsShieldIconSize,
        width: Constants.GooVitalsShieldIconSize,
        x: Constants.GooVitalsCircleX,
        y: Constants.GooVitalsShieldIconY,
        anchor: [.5, .5],
        tint: 0X000000
      },
      true,
      root.loader.resources[GooVitalsNames.GooVitalsShieldIconOutline].texture
    );
    this.createAsset(
      'text',
      {
        name: `${GooVitalsNames.HealthGlobeShieldText}-${rowIndex}-${columnIndex}`,
        fontName: FontNames.ArialBlack,
        fontSize: Constants.GooVitalsTextSize,
        x: Constants.GooVitalsTextX,
        y: Constants.GooVitalsTextY,
        anchor: [.5, .5],
        text: shield
      },
      true
    );
  }
};