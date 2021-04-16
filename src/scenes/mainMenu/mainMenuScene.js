import * as PIXI from 'pixi.js';

import sceneClass from '../sceneClass';
import { buildMainMenuTicker } from './mainMenuTicker';
import { MainMenuSceneName } from '../../constants/constants';

import app from '../../app';
import { AppWidth } from '../../constants/constants';

export default class MainMenuScene extends sceneClass{
  constructor () {
    super(`${MainMenuSceneName}Container`);

    this.assets.newGameButtonSprite = new PIXI.Sprite.from(app.loader.resources.newGameButton.texture);
    // this.assets.newGameButtonSprite.on('pointertap', () => onTapNewGameButton(['Battle']));
    this.assets.newGameButtonSprite.width = 350;
    this.assets.newGameButtonSprite.height = 50;
    this.assets.newGameButtonSprite.x = AppWidth / 2 - 175;
    this.assets.newGameButtonSprite.y = 500;
    this.assets.newGameButtonSprite.interactive = true;
    this.assets.newGameButtonSprite.buttonMode = true;
    this.assets.newGameButtonSprite.name = 'newGameButtonSprite';
    this.container.addChild(this.assets.newGameButtonSprite);
    this.createTicker(buildMainMenuTicker, `${MainMenuSceneName}Ticker`);
    this.startTicker(`${MainMenuSceneName}Ticker`);
  }
}