import { 
  root,
  SceneManager
 } from '../../../app';
import ComponentClass from '../../componentClass';
import {
  ComponentNames,
  AreaNames
} from '../../../static/names';
import GooGrid from './gooGrid/gooGrid';

export default class ActionZone extends ComponentClass {
  constructor() {
    super(ComponentNames.ActionZone);
    const tempVars = {
      x: 400,
      y: -75,
      scale: 5
    };
    this.createAsset(
      'sprite',
      {
        name: AreaNames['Catacombs-Bottom-1'],
        scale: 4
      },
      true,
      root.loader.resources[AreaNames['Catacombs-Bottom-1']].texture
    ).setTransform(tempVars.x, tempVars.y, tempVars.scale, tempVars.scale);
    this.createAsset(
      'sprite',
      {
        name: AreaNames['Catacombs-Bottom-2'],
        scale: 4
      },
      true,
      root.loader.resources[AreaNames['Catacombs-Bottom-2']].texture
    ).setTransform(tempVars.x, tempVars.y, tempVars.scale, tempVars.scale);
    this.createAsset(
      'sprite',
      {
        name: AreaNames['Catacombs-Bottom-3'],
        scale: 4
      },
      true,
      root.loader.resources[AreaNames['Catacombs-Bottom-3']].texture
    ).setTransform(tempVars.x, tempVars.y, tempVars.scale, tempVars.scale);
    this.createAsset('component', new GooGrid(), true);
    this.createAsset(
      'sprite',
      {
        name: AreaNames['Catacombs-Top-1'],
        scale: 4
      },
      true,
      root.loader.resources[AreaNames['Catacombs-Top-1']].texture
    ).setTransform(tempVars.x, tempVars.y, tempVars.scale, tempVars.scale);
  }
};