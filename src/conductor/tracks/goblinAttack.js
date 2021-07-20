import Markers from './markers/DDRKirby(ISQ) - Illumination Reel-IntroShortened';
import {
  SceneManager,
  root
} from '../../app';
import {
  SceneNames,
  ComponentNames,
  GooNames,
  PulseBarNames,
  MusicFileNames
} from '../../static/names';
import {
  setGooTempo,
  setPulseTempo
} from './trackUtils';

export default {
  music: `${MusicFileNames['DDRKirby(ISQ) - Illumination Reel-IntroShortened']}.mp3`,
  markers: Markers,
  onStart: (conductor) => {
    conductor.registerRecurringEvent(
      () => {
        SceneManager.animation.registerAnimation(setPulseTempo());
      },
      () => conductor.currentBeat >= conductor.markers.length - 2,
      1
    );
  },
  events: {
    .428: {
      event: (conductor) => {
        let assetObj = {};
        let goo = SceneManager.getChildByName(ComponentNames.GooGrid, true).assets;
        let gooTextures = root.loader.resources[GooNames.GooSprite].spritesheet.animations[GooNames.Animations.GooIdle]
        for (let gooName in goo) {
          assetObj[gooName] = goo[gooName].asset.assets[GooNames.GooSprite].asset;
        }
        conductor.registerRecurringEvent(
          () => {
            SceneManager.animation.registerAnimation(
              setGooTempo(
                conductor,
                assetObj,
                gooTextures,
                .035,
                8,
                true
              )
            );
          },
          () => conductor.currentBeat >= conductor.markers.length - 1,
          1
        );
      }
    }
  }
};