import * as PIXI from 'pixi.js';

import { 
  root,
  SceneManager
} from '../app';

import * as Names from '../static/names';

const loadAllResources = () => {
  root.loader
  //animations
  .add(Names.GooNames.GooBox, '../../assets/images/animations/goo/GooBox.png')
  .add(Names.GooNames.GooHeart, '../../assets/images/animations/goo/GooHeart.json')
  .add(Names.GooNames.GooSprite, '../../assets/images/animations/goo/Goo.json')
  .add(Names.FoeNames.EvilEye, '../../assets/images/animations/foes/evilEye/EvilEye.json')
  .add(Names.PulseBarNames.PulseBarPulseSprite, '../../assets/images/animations/pulse/pulse.json')
  
  //icons
  .add(Names.IconNames.ChainHealIcon, '../../assets/images/icons/ChainHealIcon.png')
  .add(Names.IconNames.LargeHealIcon, '../../assets/images/icons/LargeHealIcon.png')
  .add(Names.IconNames.HealOverTimeIcon, '../../assets/images/icons/HealOverTimeIcon.png')
  .add(Names.IconNames.MeditateIcon, '../../assets/images/icons/MeditateIcon.png')
  .add(Names.IconNames.FastHealIcon, '../../assets/images/icons/FastHealIcon.png')
  .add(Names.MainMenuNames.NewGameButton, '../../assets/images/menus/MainMenuNewGame.png')

  //backgrounds
  .add(Names.GodZoneNames.GodZoneBackground, '../../assets/images/backgrounds/GodZoneBackground.png')

  //fonts
  .add(Names.FontNames.ArialBlack, '../../assets/images/fonts/Arial Black.fnt')

  root.loader.onComplete.add(() => SceneManager.startGame());

  root.loader.load();
};

export default loadAllResources;

