import { ConductorNames } from '../../../static/names';

export default (conductor) => {
  let nextEventIndex = 0;
  return () => {
    let progress = conductor.music.seek();
    let event = conductor.events[nextEventIndex];
    if (progress >= event.trigger) {
      conductor.events[nextEventIndex].event();
      nextEventIndex ++;
    }
    if (nextEventIndex >= conductor.events.length) {
      conductor.stopTicker(ConductorNames.ConductorTicker);
    }
  }
};