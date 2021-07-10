import {
  root,
  SceneManager
} from '../../../../app';
import ComponentClass from '../../../componentClass';
import {
  ComponentNames,
  RhythmBarNames,
  FontNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';
import rhythmBarTickerConstructor from './rhythmBarTickerConstructor';
import { getRhythmBarHeight } from './rhythmBarUtils';

export default class RhythmBar extends ComponentClass {
  constructor() {
    super(ComponentNames.RhythmBar);
    this.createAsset(
      'sprite',
      {
        width: 335,
        height: 335,
        y: -60,
        x: 90,
        name: RhythmBarNames.RhythmBarCircleSprite,
        tint: 0x4bc200
      },
      true,
      root.loader.resources[RhythmBarNames.RhythmBarCircleSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        width: 335,
        height: 335,
        y: -60,
        x: 90,
        name: RhythmBarNames.RhythmBarCircleSpriteOutline,
        tint: 0x000000
      },
      true,
      root.loader.resources[RhythmBarNames.RhythmBarCircleSpriteOutline].texture
    );
    this.createAsset(
      'sprite',
      {
        width: 335,
        height: 335,
        y: -60,
        x: 90,
        name: RhythmBarNames.RhythmBarMeterOutlineSprite,
        tint: 0x000000
      },
      true,
      root.loader.resources[RhythmBarNames.RhythmBarMeterOutlineSprite].texture
    );
    this.createAsset(
      'sprite',
      {
        height: getRhythmBarHeight(SceneManager.data.currentRhythm, SceneManager.data.maxRhythm, Constants.RhythmMeterMaxHeight),
        y: 192,
        x: 161,
        name: RhythmBarNames.RhythmBarMeterSprite,
        anchor: [.5, 1],
        tint: 0x4bc200
      },
      true,
      root.loader.resources[RhythmBarNames.RhythmBarMeterSprite].texture
    );
    this.createAsset(
      'text',
      {
        fontName: FontNames.ArialBlack,
        name: RhythmBarNames.RhythmBarText,
        fontSize: 30,
        y: 230,
        x: 131,
        anchor: [.5, .5],
        text: SceneManager.data.startingRhythm
      },
      true
    );
  }

  start() {
    this.createTicker(
      rhythmBarTickerConstructor,
      RhythmBarNames.RhythmBarTicker,
      this
    );
    this.startTicker(RhythmBarNames.RhythmBarTicker)
  }
}