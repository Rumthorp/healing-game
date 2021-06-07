export default (animationManager) => {
  return (delta) => {
    for(let animationNumber in animationManager.animations) {
      if (animationManager.animations[animationNumber]?.done) {
        if (animationManager.animations[animationNumber].onDone) animationManager.animations[animationNumber].onDone();
        animationManager.removeAnimation(animationNumber);
        continue;
      }
      animationManager.animations[animationNumber]?.loop(delta);
    }
  }
};

// {
//   assets: {
//     name: obj ref / array
//   }
//   done: bool
//   loop: function run by ticker
//   priority: number
//   onPriorityOverride: function to run if asset has priority overriden
//   ignorePriority: bool - skipped by updatePriorityThreshhold
// }

