import { SceneManager } from '../app';
import { ComponentNames } from '../static/names';
import animationManagerTicker from './animationManagerTicker';
import Component from '../scenes/componentClass';
import { AnimationManagerNames } from '../static/names';

class AnimationManager extends Component {
  constructor() {
    super(ComponentNames.AnimationManager)
    this.animations = {};
    this.animationCounter = 0;
    this.priorityThreshhold = {};
    this.createTicker(animationManagerTicker, AnimationManagerNames.AnimationManagerTicker, this);
  }

  registerAnimation(animation) {
    this.animations[this.animationCounter] = animation;
    if (animation.onStart) animation.onStart();
    animation.start = true;
    if (!animation.ignorePriority) this.registerPriorityThreshhold(animation);
    this.animationCounter ++;
  }

  registerPriorityThreshhold(animation) {
    for(let assetName in animation.assets) {
      if (this.priorityThreshhold[assetName]) {
        if (this.priorityThreshhold[assetName].priorityThreshhold > animation.priority) delete animation.assets[assetName];
        if (this.priorityThreshhold[assetName].priorityThreshhold < animation.priority) {
          this.animations[this.priorityThreshhold[assetName]]?.onPriorityOverride();
          delete this.animations[this.priorityThreshhold[assetName]].assets[assetName];
          if (Object.keys(this.animations[this.priorityThreshhold[assetName]].assets).length === 0) removeAnimation(this.priorityThreshhold[assetName]);
          this.priorityThreshhold[assetName] = animation.priority;
        }
      }
      this.priorityThreshhold[assetName] = animation.priority;
    }
  }

  removeAnimation(animationNumber) {
    this.removePriorityThreshhold(animationNumber);
    delete this.animations[animationNumber];
  }

  removePriorityThreshhold(animationNumber) {
    for(let assetName in this.animations[animationNumber].assets) {
      delete this.priorityThreshhold[assetName];
    }
  }
}

export default AnimationManager;