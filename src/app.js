import './styles/main.scss';
import * as PIXI from 'pixi.js';

import { generateNewScene } from './scenes/sceneManager';
import { AppWidth, AppHeight } from './constants/constants';

export const app = new PIXI.Application({
  width: AppWidth,
  height: AppHeight,
  autoDensity: true,
  resolution: window.devicePixelRatio
});

const resize = (app) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let newViewportWidth;
  let newViewportHeight;
  if (viewportHeight / viewportWidth < AppHeight / AppWidth) {
    newViewportHeight = viewportHeight;
    newViewportWidth = (newViewportHeight * AppWidth) / AppHeight;
  } else {
    newViewportWidth = viewportWidth;
    newViewportHeight = (newViewportWidth * AppHeight) / AppWidth;
  }
  app.renderer.resize(newViewportWidth, newViewportHeight);
  app.stage.scale.set(newViewportWidth / AppWidth, newViewportHeight / AppHeight);
}

resize(app);
document.getElementById('pixi-root').append(app.view);
window.addEventListener("resize", () => resize(app));

generateNewScene();