import { root } from '../../../../app';
import componentClass from '../../../componentClass';
import {
  ComponentNames,
  PulseBarNames
} from '../../../../static/names';
import { pulseBarTickerConstructor } from './pulseBarTickerConstructor'

export default class PulseBar extends componentClass {
  constructor() {
    super(ComponentNames.PulseBar);
  }
};