import Markers from './markers/DDRKirby(ISQ) - Illumination Reel-IntroShortened';
import {
  SceneManager,
  root
} from '../../../../app';
import {
  SceneNames,
  ComponentNames,
  GooNames,
  PulseBarNames,
  MusicFileNames
} from '../../../../static/names';
import {
  setGooTempo,
  setPulseTempo
} from './trackUtils';

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
        let pulseTextures = root.loader.resources[PulseBarNames.PulseBarPulseSprite].spritesheet.animations.pulse;
        conductor.registerRecurringEvent(
          () => {
            SceneManager.animation.registerAnimation(
              setGooTempo(
                conductor,
                assetObj,
                root.loader.resources[GooNames.GooSprite].spritesheet.animations[GooNames.Animations.GooIdle],
                .03,
                10
              )
            );
          },
          () => conductor.beats >= conductor.markers.length - 1,
          1
        );
        conductor.registerRecurringEvent(
          () => {
            SceneManager.animation.registerAnimation(
              setPulseTempo(
                conductor,
                pulseTextures
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