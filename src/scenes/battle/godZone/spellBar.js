import { 
  root,
  SceneManager
} from '../../../app';
import ComponentClass from '../../componentClass';
import {
  ComponentNames,
  GooNames
} from '../../../static/names';
import { Constants } from '../../../static/constants';
import SpellButton from './spellButton';


export default class SpellBar extends ComponentClass {
  constructor() {
    super(ComponentNames.SpellBar);

    Constants.GodZoneSpellPositions.forEach((rowArray, rowIndex) => {
      rowArray.forEach((positionObj, columnIndex) => {
        this.createAsset('component', new SpellButton(positionObj, rowIndex, columnIndex, SceneManager.data.skills[rowIndex][columnIndex].name), true)
      });
    });
  }
};