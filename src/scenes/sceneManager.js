import app from '../app';
import loadAllResources from '../load/load';
import MainMenuScene from './mainMenu/mainMenuScene';
import { 
  MainMenuSceneName,
  AppWidth,
  AppHeight
} from '../constants/constants';

class CreateSceneManager {
  constructor () {
    this.scenes = {

    };
    this.activeScene = [''];
  }

  generateNewScene (sceneName) {
    if (sceneName === MainMenuSceneName) this.scenes[sceneName] = new MainMenuScene();
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
  }

  startGame() {
    this.generateNewScene(MainMenuSceneName);
    app.stage.addChild(this.scenes[MainMenuSceneName].container);
    app.ticker.start();
  }

  loadScenes (sceneNames) {
    this.activeScenes = [sceneName];

  }
}

export const SceneManager = new CreateSceneManager();