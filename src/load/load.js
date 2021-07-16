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
 
  .add(Names.GooNames.GooSprite, '../../assets/images/animations/goo/Goo.json')
  .add(Names.FoeNames.EvilEye, '../../assets/images/animations/foes/evilEye/EvilEye.json')
  .add(Names.PulseBarNames.PulseBarPulseSprite, '../../assets/images/animations/pulse/pulse.json')
  .add(Names.SkillNames.FastHeal.animationName, '../../assets/images/animations/skills/fastHeal/FastHeal.json')
  .add(Names.SkillNames.LargeHeal.animationName, '../../assets/images/animations/skills/largeHeal/LargeHeal.json')
  .add(Names.SkillNames.HealOverTime.animationName, '../../assets/images/animations/skills/healOverTime/HealOverTime.json')
  .add(Names.SkillNames.Shield.animationName, '../../assets/images/animations/skills/shield/Shield.json')

  //interface
  .add(Names.RhythmBarNames.RhythmBarCircleSprite, '../../assets/images/interface/rhythmBar/RhythmBarCircleSprite.png')
  .add(Names.RhythmBarNames.RhythmBarCircleSpriteOutline, '../../assets/images/interface/rhythmBar/RhythmBarCircleSpriteOutline.png')
  .add(Names.RhythmBarNames.RhythmBarMeterOutlineSprite, '../../assets/images/interface/rhythmBar/RhythmBarMeterOutlineSprite.png')
  .add(Names.RhythmBarNames.RhythmBarMeterSprite, '../../assets/images/interface/rhythmBar/RhythmBarMeterSprite.png')
  .add(Names.GooVitalsNames.GooVitalsCircleSprite, '../../assets/images/interface/gooVitals/GooVitalsCircleSprite.png')
  .add(Names.GooVitalsNames.GooVitalsCircleSpriteOutline, '../../assets/images/interface/gooVitals/GooVitalsCircleSpriteOutline.png')
  .add(Names.GooVitalsNames.GooVitalsHeartIcon, '../../assets/images/interface/gooVitals/GooVitalsHeartIcon.json')
  .add(Names.GooVitalsNames.GooVitalsShieldIcon, '../../assets/images/interface/gooVitals/GooVitalsShieldIcon.png')
  .add(Names.GooVitalsNames.GooVitalsShieldIconOutline, '../../assets/images/interface/gooVitals/GooVitalsShieldIconOutline.png')
  
  //icons
  .add(Names.SkillNames.ChainHeal.iconName, '../../assets/images/icons/ChainHealIcon.png')
  .add(Names.SkillNames.LargeHeal.iconName, '../../assets/images/icons/LargeHealIcon.png')
  .add(Names.SkillNames.HealOverTime.iconName, '../../assets/images/icons/HealOverTimeIcon.png')
  .add(Names.SkillNames.Meditate.iconName, '../../assets/images/icons/MeditateIcon.png')
  .add(Names.SkillNames.FastHeal.iconName, '../../assets/images/icons/FastHealIcon.png')
  .add(Names.SkillNames.Shield.iconName, '../../assets/images/icons/ShieldIcon.png')

  //backgrounds
  .add(Names.GodZoneNames.GodZoneBackgroundMask, '../../assets/images/backgrounds/GodZoneBackgroundMask.png')
  .add(Names.GodZoneNames.GodZoneBackground, '../../assets/images/backgrounds/cosmos.png')

  //areas
  .add(Names.AreaNames['Catacombs-Bottom-1'], '../../assets/images/areas/catacombs/Catacombs-Bottom-1.png')
  .add(Names.AreaNames['Catacombs-Bottom-2'], '../../assets/images/areas/catacombs/Catacombs-Bottom-2.png')
  .add(Names.AreaNames['Catacombs-Bottom-3'], '../../assets/images/areas/catacombs/Catacombs-Bottom-3.png')
  .add(Names.AreaNames['Catacombs-Top-1'], '../../assets/images/areas/catacombs/Catacombs-Top-1.png')

  //fonts
  .add(Names.FontNames.ArialBlack, '../../assets/images/fonts/Arial Black.fnt')

  root.loader.onComplete.add(() => SceneManager.startGame());

  root.loader.load();
};

export default loadAllResources;

