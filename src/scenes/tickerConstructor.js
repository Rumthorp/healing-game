import {
  root,
  SceneManager
} from '../app';
import {
  ComponentNames,
  RhythmBarNames,
  SceneNames
} from '../static/names';
import { Constants } from '../static/constants';
import {
  setCastProgressState,
  castSkillFromQueue,
  setRhythmBarState
} from './battle/godZone/rhythmBar/rhythmBarUtils';

export default (delta) => {
  const conductor = SceneManager.conductor;
  const animationManager = SceneManager.animation;
  return () => {
    //conductor
    if (SceneManager.tickerMetaData[ComponentNames.Conductor].active) {
      conductor.progress = conductor.music.seek();
    }
    if (SceneManager.tickerMetaData[ComponentNames.Conductor].active && conductor.progress >= conductor.markers[conductor.currentBeat]) {
      conductor.currentBeat ++;
      for (let componentName in SceneManager.tickerMetaData) {
        SceneManager.tickerMetaData[componentName].beatUpdated = false;
      }
      if (conductor.events[conductor.markers[conductor.currentBeat]]) {
        conductor.events[conductor.markers[conductor.currentBeat]].event(conductor);
      }
      if (Object.keys(conductor.recurringEvents).length !== 0) {
        for(let eventName in conductor.recurringEvents) {
          let rEvent = conductor.recurringEvents[eventName];
          if (rEvent.completeCondition()) {
            delete conductor.recurringEvents[rEvent.name];
            continue;
          }
          if (rEvent.frequencyCounter % rEvent.frequency === 0) {
            rEvent.event();
          }
          rEvent.frequencyCounter ++;
        }
      }
      if (!conductor.start) {
        conductor.onStart();
        conductor.start = true;
      }
    }

    //animationManager
    for(let animationNumber in animationManager.animations) {
      if (animationManager.animations[animationNumber]?.done) {
        if (animationManager.animations[animationNumber].onDone) animationManager.animations[animationNumber].onDone();
        animationManager.removeAnimation(animationNumber);
        continue;
      }
      animationManager.animations[animationNumber]?.loop(delta, conductor.progress);
    }

    //rhythm
    if (
      SceneManager.tickerMetaData[ComponentNames.RhythmBar].active
      && !SceneManager.tickerMetaData[ComponentNames.RhythmBar].beatUpdated
      && conductor.currentBeat > conductor.previousBeat
      && conductor.currentBeat > 2
      && SceneManager.data.currentRhythm !== SceneManager.data.maxRhythm
    ) {
      if (SceneManager.data.skillQueue.queue.length === 0){
        SceneManager.data.currentRhythm += 1;
        setRhythmBarState();
      }
      if (SceneManager.data.skillQueue.queue.length > 0 && SceneManager.data.skillQueue.queue[0].castProgress >= 1) {
        SceneManager.data.skillQueue.queue[0].castProgress -= 1;
        setCastProgressState();
      } 
      if (SceneManager.data.skillQueue.queue.length > 0 && SceneManager.data.skillQueue.queue[0].castProgress < 1) {
        castSkillFromQueue();
      }
      SceneManager.tickerMetaData[ComponentNames.RhythmBar].beatUpdated = true;
    }

    //conductor again
    if (SceneManager.tickerMetaData[ComponentNames.Conductor].active && conductor.progress >= conductor.markers[conductor.currentBeat + 1]) {
      conductor.previousBeat = conductor.currentBeat;
      if (conductor.markers.length <= conductor.currentBeat) {
        SceneManager.tickerMetaData[ComponentNames.Conductor].active = false;
      }
    }
  }
}