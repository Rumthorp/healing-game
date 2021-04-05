import * as PIXI from 'pixi.js';

import { changeScene } from '../sceneManagerSlice';
import { generateNewScene } from '../sceneManager';
import { AppWidth, AppHeight } from '../../constants/constants';

const newGameButtonTexture = PIXI.Texture.from('../../../assets/main-menu-new-game.png');

const onTapNewGameButton = (sceneName) => {
  store.dispatch(changeScene(sceneName));
  generateNewScene();
};

export const buildMainMenuScene = () => {
  const mainMenuSceneContainer = new PIXI.Container();
  const newGameButtonSprite = new PIXI.Sprite(newGameButtonTexture);
  newGameButtonSprite.on('pointertap', () => onTapNewGameButton('Battle'));
  newGameButtonSprite.width = 350;
  newGameButtonSprite.height = 50;
  newGameButtonSprite.x = AppWidth / 2 - 175;
  newGameButtonSprite.y = 500;
  return mainMenuSceneContainer.addChild(newGameButtonSprite);
};