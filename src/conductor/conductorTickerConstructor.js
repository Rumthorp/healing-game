import { ConductorNames } from '../static/names';

export default (conductor) => {
  let nextBeat = conductor.markers[conductor.beats];
  return () => {
    let progress = conductor.music.seek();
    if (progress >= nextBeat) {
      if (conductor.events[nextBeat]) {
        conductor.events[nextBeat].event(conductor);
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
      conductor.beats ++;
      nextBeat = conductor.markers[conductor.beats];
      if (!conductor.start) {
        conductor.onStart();
        conductor.start = true;
      }
    }
    if (conductor.markers.length <= conductor.beats) {
      conductor.stopTicker(ConductorNames.ConductorTicker);
    }
  }
};