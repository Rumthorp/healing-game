import { MusicFileNames } from '../../../../static/names'
import Markers from './markers/DDRKirby(ISQ) - Illumination Reel-IntroShortened';
import {
  SceneManager,
  root
} from '../../../../app';
import {
  SceneNames,
  ComponentNames,
  GooNames
} from '../../../../static/names';
import { setGooTempo } from './trackUtils';

export default {
  music: `${MusicFileNames['DDRKirby(ISQ) - Illumination Reel-IntroShortened']}.mp3`,
  markers: Markers,
  onStart: () => {
    
  },
  events: {
    .428: {
      event: (conductor) => {
        let assetObj = {};
        let goo = SceneManager.getChildByName(SceneNames.Battle).getChildByName(ComponentNames.GooGrid).assets
        for (let gooName in goo) {
          assetObj[gooName] = goo[gooName].asset.assets[GooNames.GooSprite].asset;
        }
        conductor.registerRecurringEvent(
          () => {
            SceneManager.animation.registerAnimation(
              setGooTempo(
                conductor,
                assetObj,
                root.loader.resources[GooNames.GooSprite].spritesheet.animations[GooNames.Animations.GooIdle],
                .04,
                6
              )
            );
          },
          () => conductor.beats >= conductor.markers.length - 1,
          1
        );
      }
    }
  }
};