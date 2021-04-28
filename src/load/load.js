import * as PIXI from 'pixi.js';

import { 
  root,
  SceneManager
} from '../app';

const loadAllResources = (app) => {
  root.loader
  .add('newGameButton', '../../assets/menus/main-menu-new-game.png')
  .add('quarterHeart', '../../assets/goo/quarter-heart.png')
  .add('halfHeart', '../../assets/goo/half-heart.png')
  .add('threeQuartersHeart', '../../assets/goo/three-quarters-heart.png')
  .add('full-heart', '../../assets/goo/full-heart.png')
  .add('emptyHeart', '../../assets/goo/empty-heart.png')
  .add('gooBox', '../../assets/goo/grey-box.png')
  .add('goo', '../../assets/goo/goo.json');

  root.loader.onComplete.add(() => SceneManager.startGame());

  root.loader.load();
};

export default loadAllResources;

