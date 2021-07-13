import {
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  ComponentNames,
  HealthBarNames,
  FontNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';

export default class gooBar extends ComponentClass {
  constructor(rowIndex, columnIndex) {
    super(ComponentNames.HealthBar);
    
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarLifeCircleSprite}-${rowIndex}-${columnIndex}`,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        tint: 0X520000
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarLifeCircleSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarShieldCircleSprite}-${rowIndex}-${columnIndex}`,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        tint: 0X7d7d7d
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarShieldCircleSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HeathBarLifeAndShieldBarSprite}-${rowIndex}-${columnIndex}`,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        tint: 0X000000
      },
      true,
      root.loader.resources[HealthBarNames.HeathBarLifeAndShieldBarSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarLifeCircleSpriteOutline}-${rowIndex}-${columnIndex}`,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        tint: 0X000000
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarLifeCircleSpriteOutline].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarShieldCircleSpriteOutline}-${rowIndex}-${columnIndex}`,
        width: Constants.GooBoxSize,
        height: Constants.GooBoxSize,
        tint: 0X000000
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarShieldCircleSpriteOutline].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarHeartIcon}-${rowIndex}-${columnIndex}`,
        height: 27,
        width: 27,
        anchor: [.5, .5],
        x: 27.75,
        y: 17
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarHeartIcon].spritesheet.animations[HealthBarNames.HealthBarHeartIcon][4]
    );
    this.createAsset(
      'text',
      {
        name: `${HealthBarNames.HealthBarShieldText}-${rowIndex}-${columnIndex}`,
        fontName: FontNames.ArialBlack,
        fontSize: 20,
        anchor: [.5, .5],
        x: 27,
        y: 37,
        text: 99
      },
      true
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarShieldIcon}-${rowIndex}-${columnIndex}`,
        height: 27,
        width: 27,
        anchor: [.5, .5],
        x: 130.5,
        y: 16
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarShieldIcon].texture
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarShieldIconOutline}-${rowIndex}-${columnIndex}`,
        height: 27,
        width: 27,
        anchor: [.5, .5],
        x: 130.5,
        y: 16,
        tint: 0X000000
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarShieldIconOutline].texture
    );
    this.createAsset(
      'text',
      {
        name: `${HealthBarNames.HealthBarShieldText}-${rowIndex}-${columnIndex}`,
        fontName: FontNames.ArialBlack,
        fontSize: 20,
        anchor: [.5, .5],
        x: 130,
        y: 37,
        text: 900
      },
      true
    );
    this.createAsset(
      'sprite',
      {
        name: `${HealthBarNames.HealthBarMeterSprite}-${rowIndex}-${columnIndex}`,
        anchor: [0, .5],
        width: 25,
        tint: 0XEB3939
      },
      true,
      root.loader.resources[HealthBarNames.HealthBarMeterSprite].texture
    )
    .setTransform(
      57.5,
      12.5,
      .4,
      .4
    );
  }
};