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
    this.music.volume(.3);
    this.events = track.events;
    this.createTicker(conductorTickerConstructor, ConductorNames.ConductorTicker, this);
  }

  startConductor() {
    this.startTicker(ConductorNames.ConductorTicker);
    this.music.play();
  }
}

export default Conductor;