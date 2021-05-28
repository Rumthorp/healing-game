export default (animationManager) => {
  for(let animationNumber in animationManager.animations) {
    if (animationManager[animationNumber]?.done) {
      animationManager.removeAnimation(animationNumber);
      continue;
    }
    animationManager[animationNumber]?.loop();
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

