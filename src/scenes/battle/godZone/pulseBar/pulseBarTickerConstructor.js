import { SceneManager } from '../../../../app';
import { ComponentNames } from '../../../../static/names';

export const pulseBarTickerConstructor = () => {
  let conductor = SceneManager.getChildByName(ComponentNames.Conductor, true);
  return () => {
    
  };
}