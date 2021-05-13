import './styles/main.scss';
import * as PIXI from 'pixi.js';

import SceneManagerClass from './scenes/sceneManager';
import { SceneNames } from './static/names';
import { Constants } from './static/constants';

const app = new PIXI.Application({
  width: Constants.AppWidth,
  height: Constants.AppHeight,
  autoDensity: true,
  resolution: window.devicePixelRatio
});
export const root = app;
app.stage.addChild(new SceneManagerClass());
app.stage.getChildByName(SceneNames.SceneManager).initialLoad();
export const SceneManager = app.stage.getChildByName(SceneNames.SceneManager);








