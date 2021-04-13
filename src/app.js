import './styles/main.scss';
import * as PIXI from 'pixi.js';

import { SceneManager } from './scenes/sceneManager';
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
export default app;

SceneManager.initialLoad();








