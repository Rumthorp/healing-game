import {
  root,
  SceneManager
} from '../../app';
import ComponentClass from '../componentClass';
import { buildMainMenuTicker } from './mainMenuTickers';
import {
  SceneNames,
  MainMenuNames
} from '../../static/names';
import { Constants } from '../../static/constants';

export default class MainMenuScene extends ComponentClass{
  constructor () {
    super(SceneNames.MainMenu);

    this.createAsset(
      'sprite',
      {
        name: MainMenuNames.NewGameButton,
        width: 350,
        height: 50,
        x: Constants.AppWidth / 2 - 175,
        y: 500,
        interactive: true,
        buttonMode: true,
      },
      true,
      root.loader.resources[MainMenuNames.NewGameButton].texture
    );
    this.assets[MainMenuNames.NewGameButton].asset.on('click', () => {
      SceneManager.changeScene([SceneNames.Battle], true)
    });
    
    this.createTicker(buildMainMenuTicker, MainMenuNames.Ticker1);
    this.startTicker(MainMenuNames.Ticker1);
    // this.createTicker(buildMainMenuTestTicker, `${MainMenuSceneName}TestTicker`, this.assets.newGameButtonSprite.asset);
    // this.startTicker(`${MainMenuSceneName}TestTicker`);
  }
}