import {
  root,
  SceneManager
} from '../../app';
import {
  ComponentNames,
  GooNames,
  PulseBarNames
} from '../../static/names';

export const setGooTempo = (conductor, assets, animationTextures, animationSpeed, animationClimaxIndex, resetOnDone) => {
  return {
    assets,
    loop(delta, progress) {
      if (progress >= this.data.animationStart + (this.data.animationSpeed * this.data.animationProgress)) {
        for (let assetName in this.assets) {
          this.assets[assetName].texture = this.data.animationTextures[this.data.animationProgress];
        }
        if (this.data.animationProgress === animationTextures.length - 1) this.done = true;
        this.data.animationProgress ++;
        return;
      }
    },
    onDone() {
      if (this.data.resetOnDone) {
        for (let assetName in this.assets) {
          this.assets[assetName].texture = this.data.animationTextures[0];
        }
      }
    },
    start: false,
    done: false,
    priority: 0,
    data: {
      animationStart: conductor.markers[conductor.currentBeat + 1] - (animationSpeed * animationClimaxIndex),
      animationProgress: 0,
      animationTextures,
      animationSpeed,
      animationClimaxIndex,
      resetOnDone
    }
  }
};

export const setPulseTempo = () => {
  const pulseTextures = root.loader.resources[PulseBarNames.PulseBarPulseSprite].spritesheet.animations.pulse
  return {
    assets: {},
    start: false,
    onStart() {
      let name = `${PulseBarNames.PulseBarPulseSprite}-${SceneManager.conductor.currentBeat}`;
      this.data.assetName = name;
      this.assets[name] = this.data.pulseBarRef.createAsset(
        'sprite',
        {
          name: name,
          x: 0,
          y: 90,
          width: 390,
          height: 390
        },
        false,
        pulseTextures[0]
      )
    },
    loop() {
      let time = SceneManager.conductor.music.seek();
      if (time >= this.data.animationStart + (this.data.animationSpeed * (this.data.animationProgress))) {
        if (this.data.animationProgress === 0) this.data.pulseBarRef.addAsset(this.data.assetName);
        this.assets[this.data.assetName].active = true;
        this.assets[this.data.assetName].texture = this.data.pulseTextures[this.data.animationProgress];
        if (this.data.animationProgress === 43) this.done = true;
        this.data.animationProgress ++;
      }
    },
    onDone() {
      this.assets[this.data.assetName].selfDestruct();
    },
    done: false,
    priority: 0,
    data: {
      animationStart: SceneManager.conductor.markers[SceneManager.conductor.currentBeat + 2] - (.025 * 23),
      animationSpeed: .025,
      animationProgress: 0,
      pulseBarRef: SceneManager.getChildByName(ComponentNames.PulseBar, true),
      pulseTextures
    }
  }
};



