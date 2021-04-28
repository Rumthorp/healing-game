import { root } from '../app';
import ComponentClass from './componentClass';
import createInitialState from '../data/createInitialState';
import loadAllResources from '../load/load';
import MainMenuScene from './mainMenu/mainMenuScene';
import BattleScene from './battle/battleScene';
import { 
  SceneManagerName,
  AppWidth,
  AppHeight,
  MainMenuSceneName,
  BattleSceneName
} from '../constants/constants';

export default class SceneManager extends ComponentClass {
  constructor () {
    super(SceneManagerName);
    this.data = createInitialState();
  }

  loadResources() {
    loadAllResources(root);
  }

  initialLoad () {
    const resize = (root) => {
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
      root.renderer.resize(newViewportWidth, newViewportHeight);
      root.stage.scale.set(newViewportWidth / AppWidth, newViewportHeight / AppHeight);
    }
    
    resize(root);
    document.getElementById('pixi-root').append(root.view);
    window.addEventListener("resize", () => resize(root));
    this.loadResources();
  }

  startGame() {
    this.createAsset('component', new MainMenuScene(), true);
    root.ticker.start();
    console.log(this)
  }

  changeScene(scenes, isolate) {
    if (isolate) {
      for (let assetName in this.assets) {
        this.removeAsset(assetName, true, true);
      }
    }
    scenes.forEach((sceneName) => {
      if (sceneName === MainMenuSceneName) {
        this.assets[MainMenuSceneName]
        ? this.addAsset(MainMenuSceneName)
        : this.createAsset('component', new MainMenuScene(), true);
      } 
      if (sceneName === BattleSceneName) {
        this.assets[BattleSceneName]
        ? this.addAsset(BattleSceneName)
        : this.createAsset('component', new BattleScene(), true);
      } 
    });
  }
}