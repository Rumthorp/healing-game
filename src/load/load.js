import * as PIXI from 'pixi.js';

import { 
  root,
  SceneManager
} from '../app';

import * as Names from '../static/names';

const loadAllResources = () => {
  root.loader
  .add(Names.MainMenuNames.NewGameButton, '../../assets/menus/MainMenuNewGame.png')
  .add(Names.GooNames.GooBox, '../../assets/goo/GooBox.png')
  .add(Names.GooNames.GooHeart, '../../assets/goo/GooHeart.json')
  .add(Names.GooNames.GooSprite, '../../assets/goo/Goo.json');

  root.loader.onComplete.add(() => SceneManager.startGame());

  root.loader.load();
};

export default loadAllResources;

