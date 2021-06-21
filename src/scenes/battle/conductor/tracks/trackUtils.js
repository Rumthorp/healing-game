import { SceneManager } from '../../../../app';
import {
  ComponentNames,
  GooNames,
  PulseBarNames
} from '../../../../static/names';

export const setGooTempo = (conductor, assets, gooIdleTextures, animationSpeed, animationClimaxIndex) => {
  return {
    assets,
    loop() {
      let time = conductor.music.seek();
      if (time >= this.data.animationStart + (this.data.animationSpeed * (this.data.animationProgress + 1))) {
        for (let assetName in this.assets) {
          this.assets[assetName].texture = this.data.gooIdleTextures[this.data.animationProgress];
        }
        if (this.data.animationProgress === 10) this.done = true;
        this.data.animationProgress ++;
        return;
      }
    },
    onDone() {
      for (let assetName in this.assets) {
        this.assets[assetName].texture = this.data.gooIdleTextures[0];
      }
    },
    start: false,
    done: false,
    priority: 0,
    data: {
      animationStart: conductor.markers[conductor.beats + 1] - (animationSpeed * (animationClimaxIndex + 1)),
      animationProgress: 0,
      gooIdleTextures,
      animationSpeed,
      animationClimaxIndex
    }
  }
};

export const setPulseTempo = (conductor, pulseTextures) => {
  return {
    assets: {},
    start: false,
    onStart() {
      let pulseBar = SceneManager.getChildByName(ComponentNames.PulseBar, true);
      let name = `${PulseBarNames.PulseBarPulseSprite}-${conductor.beats}`;
      pulseTextures[0].rotate = 12;
      this.data.assetName = name;
      this.assets[name] = pulseBar.createAsset(
        'sprite',
        {
          name: name,
          x: 200,
        },
        true,
        pulseTextures[0]
      )
    },
    loop() {
      let time = conductor.music.seek();
      if (time >= this.data.animationStart + (this.data.animationSpeed * (this.data.animationProgress + 1))) {
        this.data.pulseTextures[this.data.animationProgress].rotate = 12;
        this.assets[this.data.assetName].texture = this.data.pulseTextures[this.data.animationProgress];
        if (this.data.animationProgress === 18) this.done = true;
        this.data.animationProgress ++;
        // this.assets[this.data.assetName].x += 10;
      }
    },
    onDone() {
      this.assets[this.data.assetName].selfDestruct();
    },
    done: false,
    priority: 0,
    data: {
      animationStart: conductor.markers[conductor.beats + 1] - (((conductor.markers[conductor.beats + 1] - conductor.markers[conductor.beats]) / 18) * 9),
      animationDuration: conductor.markers[conductor.beats + 1] - conductor.markers[conductor.beats],
      animationSpeed: ((conductor.markers[conductor.beats + 1] - conductor.markers[conductor.beats]) / 18),
      animationProgress: 1,
      assetName: '',
      pulseTextures
    }
  }
};



