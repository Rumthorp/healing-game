import { GooNames } from '../../../../static/names';

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