import * as PIXI from 'pixi.js';
import {
  root,
  SceneManager
} from '../../app';
import ComponentClass from '../componentClass';
import {
  SceneNames,
  MainMenuNames,
  FontNames
} from '../../static/names';
import { Constants } from '../../static/constants';

export default class MainMenuScene extends ComponentClass{
  constructor () {
    super(SceneNames.MainMenu);
    this.createAsset(
      'text',
      {
        fontName: FontNames.ArialBlack,
        name: MainMenuNames.NewGameButton,
        width: 350,
        height: 50,
        x: Constants.AppWidth / 2 - 175,
        y: 500,
        interactive: true,
        buttonMode: true,
        text: 'New Game'
      },
      true
    );
    this.assets[MainMenuNames.NewGameButton].asset.on('click', () => {
      SceneManager.changeScene([SceneNames.Battle], true)
    });
  }
}