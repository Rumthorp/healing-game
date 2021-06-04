import Markers from './markers/DDRKirby(ISQ) - Illumination Reel-IntroShortened';

import { SceneManager } from '../../../../app';
import {
  SceneNames,
  ComponentNames,
  GooNames
} from '../../../../static/names';

export default {
  music: 'DDRKirby(ISQ) - Illumination Reel-IntroShortened.mp3',
  markers: Markers,
  onStart: () => {
    
  },
  events: {
    .026: {
      event: (conductor) => {
        let assetObj = {};
        let goo = SceneManager.getChildByName(SceneNames.Battle).getChildByName(ComponentNames.GooGrid).assets
        for (let gooName in goo) {
          assetObj[gooName] = goo[gooName].asset.assets[GooNames.GooSprite].asset;
        }
        conductor.registerRecurringEvent(
          () => {
            SceneManager.animation.registerAnimation({
              assets: assetObj,
              loop() {
                setTimeout(() => {
                  for (let assetName in this.assets) {
                    this.assets[assetName].gotoAndPlay(0);
                  }
                }, ((conductor.markers[conductor.beats + 1] - conductor.markers[conductor.beats]) - .22) * 1000)
                this.done = true;
              },
              done: false,
              priority: 0,
            });
          },
          () => conductor.beats >= conductor.markers.length - 1,
          1
        );
      }
    }
  }
}