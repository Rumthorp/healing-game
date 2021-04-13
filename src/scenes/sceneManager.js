import store from '../store';
import app from '../app';
import loadAllResources from '../load/load';
import { buildMainMenuScene } from './mainMenu/mainMenuScene';
import { removeScene, isolateScenes } from './sceneManagerSlice';
import { 
  MainMenuSceneName,
  AppWidth,
  AppHeight
} from '../constants/constants';
import TickerManager from './tickerManager';

class CreateSceneManager {
  constructor () {
    this.scenes = {};
  }

  generateNewScene (sceneName) {
    if (sceneName === MainMenuSceneName) this.scenes[sceneName] = buildMainMenuScene();
  }

  loadResources() {
    loadAllResources(app);
  }

  initialLoad () {
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
    this.loadResources();
    console.log(app.stage)
  }

  startGame() {
    this.generateNewScene(MainMenuSceneName);
    app.stage.addChild(this.scenes[MainMenuSceneName]);
    app.ticker.add(TickerManager.tickers.scenes[MainMenuSceneName]);
    app.ticker.start();
  }

  loadScenes () {

  }
}

export const SceneManager = new CreateSceneManager();