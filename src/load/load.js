import * as PIXI from 'pixi.js';

import { SceneManager } from '../scenes/sceneManager';

const loadAllResources = (app) => {
  app.loader
  .add('newGameButton', '../../assets/menus/main-menu-new-game.png')
  .add('goo', '../../assets/goo/goo.png')
  .add('quarterHeart', '../../assets/goo/quarter-heart.png')
  .add('halfHeart', '../../assets/goo/half-heart.png')
  .add('threeQuartersHeart', '../../assets/goo/three-quarters-heart.png')
  .add('full-heart', '../../assets/goo/full-heart.png')
  .add('emptyHeart', '../../assets/goo/empty-heart.png')
  .add('gooBox', '../../assets/goo/grey-box.png');

  app.loader.onComplete.add(() => SceneManager.startGame());

  app.loader.load();
};

export default loadAllResources;

