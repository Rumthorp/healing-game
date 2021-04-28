import './styles/main.scss';
import * as PIXI from 'pixi.js';

import SceneManagerClass from './scenes/sceneManager';
import { SceneManagerName } from './constants/constants';
import { 
  AppWidth,
  AppHeight
} from './constants/constants';

const app = new PIXI.Application({
  width: AppWidth,
  height: AppHeight,
  autoDensity: true,
  resolution: window.devicePixelRatio
});
export const root = app;
app.stage.addChild(new SceneManagerClass());
app.stage.getChildByName(SceneManagerName).initialLoad();
export const SceneManager = app.stage.getChildByName(SceneManagerName);








