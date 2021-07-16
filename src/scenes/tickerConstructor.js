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
import { getRhythmBarHeight } from './battle/godZone/rhythmBar/rhythmBarUtils';

export default (delta) => {
  const conductor = SceneManager.conductor;
  const animationManager = SceneManager.animation;
  return () => {
    //conductor
    if (SceneManager.tickerMetaData[ComponentNames.Conductor].active) {
      conductor.progress = conductor.music.seek();
    }
    if (SceneManager.tickerMetaData[ComponentNames.Conductor].active && conductor.progress >= conductor.markers[conductor.currentBeat + 1]) {
      conductor.currentBeat ++;
      for (let componentName in SceneManager.tickerMetaData) {
        SceneManager.tickerMetaData[componentName].beatUpdated = false;
      }
      console.log(conductor.markers[conductor.currentBeat])
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
      SceneManager.data.currentRhythm += 1;
      let RhythmBar = SceneManager.assets[SceneNames.Battle].asset.assets[ComponentNames.GodZone].asset.assets[ComponentNames.RhythmBar].asset;
      RhythmBar.assets[RhythmBarNames.RhythmBarMeterSprite].asset.height = getRhythmBarHeight(
        SceneManager.data.currentRhythm,
        SceneManager.data.maxRhythm,
        Constants.RhythmMeterMaxHeight
      );
      RhythmBar.assets[RhythmBarNames.RhythmBarText].asset.text = SceneManager.data.currentRhythm;
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