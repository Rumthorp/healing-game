import { Howl, Howler } from 'howler';
import Component from '../../componentClass';
import conductorTickerConstructor from './conductorTickerConstructor';
import { 
  ComponentNames,
  ConductorNames
} from '../../../static/names';

class Conductor extends Component{
  constructor(track) {
    super(ComponentNames.Conductor);
    this.music = new Howl({
      src: [`../../../../assets/sound/music/${track.music}`]
    });
    this.beats = 0;
    this.music.volume(.3);
    this.markers = track.markers;
    this.events = track.events;
    this.recurringEvents = {};
    this.recuringEventsCounter = 0;
  }

  start() {
    this.createTicker(conductorTickerConstructor, ConductorNames.ConductorTicker, this);
    this.startTicker(ConductorNames.ConductorTicker);
    this.music.play();
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