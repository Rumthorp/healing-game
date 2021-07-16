import { root } from '../app';
import ComponentClass from './componentClass';
import createInitialState from '../data/createInitialState';
import loadAllResources from '../load/load';
import AnimationManager from '../animations/animationManager';
import Conductor from '../conductor/conductor';
import MainMenuScene from './mainMenu/mainMenuScene';
import BattleScene from './battle/battleScene';
import {
  SceneNames,
  ComponentNames
} from '../static/names';
import { Constants } from '../static/constants';
import tickerConstructor from './tickerConstructor';

export default class SceneManager extends ComponentClass {
  constructor () {
    super(SceneNames.SceneManager);
    this.data = createInitialState();
    this.conductor = new Conductor();
    this.animation = new AnimationManager();
    this.tickerMetaData = {};
    this.tickerMetaData[ComponentNames.RhythmBar] = { beatUpdated: false, active: false };
    this.tickerMetaData[ComponentNames.Conductor] = { beatUpdated: false, active: false };
    this.tickerMetaData[ComponentNames.AnimationManager] = { beatUpdated: false, active: true };
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
      if (viewportHeight / viewportWidth < Constants.AppHeight / Constants.AppWidth) {
        newViewportHeight = viewportHeight;
        newViewportWidth = (newViewportHeight * Constants.AppWidth) / Constants.AppHeight;
      } else {
        newViewportWidth = viewportWidth;
        newViewportHeight = (newViewportWidth * Constants.AppHeight) / Constants.AppWidth;
      }
      root.renderer.resize(newViewportWidth, newViewportHeight);
      root.stage.scale.set(newViewportWidth / Constants.AppWidth, newViewportHeight / Constants.AppHeight);
    }
    
    resize(root);
    document.getElementById('pixi-root').append(root.view);
    window.addEventListener("resize", () => resize(root));
    this.loadResources();
  }

  startGame() {
    this.createAsset('component', new MainMenuScene(), true);
    let ticker = tickerConstructor();
    root.ticker.add(ticker);
    root.ticker.start();
    console.log(root);
  }

  changeScene(scenes, isolate) {
    if (isolate) {
      for (let assetName in this.assets) {
        this.removeAsset(assetName, true, true);
      }
    }
    scenes.forEach((sceneName) => {
      if (sceneName === SceneNames.MainMenu) {
        this.assets[SceneNames.MainMenu]
        ? this.addAsset(SceneNames.MainMenu)
        : this.createAsset('component', new MainMenuScene(), true);
      } 
      if (sceneName === SceneNames.Battle) {
        this.assets[SceneNames.Battle]
        ? this.addAsset(SceneNames.Battle)
        : this.createAsset('component', new BattleScene(), true);
      } 
    });
  }
}