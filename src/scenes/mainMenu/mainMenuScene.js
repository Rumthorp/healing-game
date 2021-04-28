import {
  root,
  SceneManager
} from '../../app';
import ComponentClass from '../componentClass';
import {
  buildMainMenuTicker,
  buildMainMenuTestTicker
} from './mainMenuTickers';
import { MainMenuSceneName } from '../../constants/constants';
import {
  AppWidth,
  NewGameButtonName,
  BattleSceneName
} from '../../constants/constants';

export default class MainMenuScene extends ComponentClass{
  constructor () {
    super(MainMenuSceneName);

    this.createAsset(
      'sprite',
      {
        name: NewGameButtonName,
        width: 350,
        height: 50,
        x: AppWidth / 2 - 175,
        y: 500,
        interactive: true,
        buttonMode: true,
      },
      true,
      root.loader.resources.newGameButton.texture
    );
    this.assets[NewGameButtonName].asset.on('click', () => {
      SceneManager.changeScene([BattleSceneName], true)
    });
    
    this.createTicker(buildMainMenuTicker, `${MainMenuSceneName}Ticker`);
    this.startTicker(`${MainMenuSceneName}Ticker`);
    console.log(this.tickers)
    // this.createTicker(buildMainMenuTestTicker, `${MainMenuSceneName}TestTicker`, this.assets.newGameButtonSprite.asset);
    // this.startTicker(`${MainMenuSceneName}TestTicker`);
  }
}