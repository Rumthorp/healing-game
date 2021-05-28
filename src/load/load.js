import * as PIXI from 'pixi.js';

import { 
  root,
  SceneManager
} from '../app';

import * as Names from '../static/names';

const loadAllResources = () => {
  root.loader
  .add(Names.MainMenuNames.NewGameButton, '../../assets/images/menus/MainMenuNewGame.png')
  .add(Names.GooNames.GooBox, '../../assets/images/goo/GooBox.png')
  .add(Names.GooNames.GooHeart, '../../assets/images/goo/GooHeart.json')
  .add(Names.GooNames.GooSprite, '../../assets/images/goo/Goo.json')
  .add(Names.FoeNames.EvilEye, '../../assets/images/foes/evilEye/EvilEye.json');

  root.loader.onComplete.add(() => SceneManager.startGame());

  root.loader.load();
};

export default loadAllResources;

