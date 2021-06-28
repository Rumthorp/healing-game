import Markers from './markers/Celtic Adventure Music - Land of the Brave_Shaved';
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
  music: `${MusicFileNames['Celtic Adventure Music - Land of the Brave_Shaved']}.mp3`,
  markers: Markers,
  onStart: (conductor) => {
    conductor.registerRecurringEvent(
      () => {
        SceneManager.animation.registerAnimation(
          setPulseTempo(
            conductor,
            root.loader.resources[PulseBarNames.PulseBarPulseSprite].spritesheet.animations.pulse
          )
        );
      },
      () => conductor.beats >= conductor.markers.length - 2,
      1
    );
  },
  events: {
    .23: {
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
                .05,
                9
              )
            );
          },
          () => conductor.beats >= conductor.markers.length - 1,
          2
        );
      }
    },
    .71: {
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
                root.loader.resources[GooNames.GooSprite].spritesheet.animations[GooNames.Animations.GooLeap],
                .05,
                6
              )
            );
          },
          () => conductor.beats >= conductor.markers.length - 1,
          2
        );
      }
    }
  }
};