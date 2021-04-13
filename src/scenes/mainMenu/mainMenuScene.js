import * as PIXI from 'pixi.js';

import app from '../../app';
import store from '../../store';
import { isolateScenes } from '../sceneManagerSlice';
import { AppWidth } from '../../constants/constants';

const onTapNewGameButton = (sceneArray) => {
  store.dispatch(isolateScenes(sceneArray));
  //removeSceneAndTicker(['Main Menu']);
};

export const buildMainMenuScene = () => {
  console.log(app.loader)
  const mainMenuSceneContainer = new PIXI.Container();
  mainMenuSceneContainer.name = 'mainMenuSceneContainer';
  const newGameButtonSprite = new PIXI.Sprite.from(app.loader.resources.newGameButton.texture);
  newGameButtonSprite.on('pointertap', () => onTapNewGameButton(['Battle']));
  newGameButtonSprite.width = 350;
  newGameButtonSprite.height = 50;
  newGameButtonSprite.x = AppWidth / 2 - 175;
  newGameButtonSprite.y = 500;
  newGameButtonSprite.interactive = true;
  newGameButtonSprite.buttonMode = true;
  newGameButtonSprite.name = 'newGameButtonSprite';
  mainMenuSceneContainer.addChild(newGameButtonSprite);

  return mainMenuSceneContainer;
};