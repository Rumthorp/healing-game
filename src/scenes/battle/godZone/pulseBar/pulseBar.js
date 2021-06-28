import { root } from '../../../../app';
import componentClass from '../../../componentClass';
import {
  ComponentNames,
  PulseBarNames,
  GooNames
} from '../../../../static/names';
import { pulseBarTickerConstructor } from './pulseBarTickerConstructor'

export default class PulseBar extends componentClass {
  constructor() {
    super(ComponentNames.PulseBar);
    // this.createAsset(
    //   'sprite',
    //   {
    //     width: 200,
    //     height: 100,
    //     y: 220 
    //   },
    //   true,
    //   root.loader.resources[GooNames.GooBox].texture,
    // );
  }
};