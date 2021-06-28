import { Howl, Howler } from 'howler';
import Component from '../scenes/componentClass';
import conductorTickerConstructor from './conductorTickerConstructor';
import { 
  ComponentNames,
  ConductorNames
} from '../static/names';

class Conductor extends Component{
  constructor(track) {
    super(ComponentNames.Conductor);
    this.recurringEvents = {};
    this.recuringEventsCounter = 0;
  }

  loadTrack(track, volume) {
    this.music = new Howl({
      src: [`../../../../assets/sound/music/${track.music}`]
    });
    this.beats = 0;
    this.music.volume(volume);
    this.markers = track.markers;
    this.events = track.events;
    this.trackStarted = false;
    if (track.onStart) this.trackOnStart = track.onStart;
  }

  start() {
    this.createTicker(conductorTickerConstructor, ConductorNames.ConductorTicker, this);
    this.startTicker(ConductorNames.ConductorTicker);
    this.music.play();
    this?.trackOnStart(this);
    this.trackStarted = true;
  }

  registerRecurringEvent(event, completeCondition, frequency) {
    this.recurringEvents[this.recuringEventsCounter] = {
      event,
      completeCondition,
      frequency,
      frequencyCounter: frequency,
      name: this.recuringEventsCounter
    }
    this.recuringEventsCounter ++;
  }
}

export default Conductor;