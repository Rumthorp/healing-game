import Markers from './markers/DDRKirby(ISQ) - Enter the Vault_IntroShortened';
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
  music: `${MusicFileNames['DDRKirby(ISQ) - Enter the Vault_IntroShortened']}.mp3`,
  markers: Markers,
  onStart: () => {
    
  },
  events: {
    .375: {
      event: (conductor) => {
        let assetObj = {};
        let goo = SceneManager.getChildByName(ComponentNames.GooGrid, true).assets;
        let gooTextures = root.loader.resources[GooNames.GooSprite].spritesheet.animations[GooNames.Animations.GooIdle]
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
                gooTextures,
                .03,
                9
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