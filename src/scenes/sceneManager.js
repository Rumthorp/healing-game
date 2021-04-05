import store from '../store';
import { app } from '../app';
import { buildMainMenuScene } from './mainMenu/mainMenuScene';

export const generateNewScene = () => {
  const activeScene = store.getState().sceneManager;

  if (activeScene === 'Main Menu') {
    app.stage.addChild(buildMainMenuScene());
    console.log(app);
  }
};