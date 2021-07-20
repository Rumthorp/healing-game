import {
  root,
  SceneManager
} from '../../../../app';
import {
  SceneNames,
  ComponentNames,
  RhythmBarNames
} from '../../../../static/names';
import { Constants } from '../../../../static/constants';

export const setRhythmBarState = () => {
  const RhythmBar = SceneManager.assets[SceneNames.Battle].asset.assets[ComponentNames.GodZone].asset.assets[ComponentNames.RhythmBar].asset;
  RhythmBar.assets[RhythmBarNames.RhythmBarMeterSprite].asset.height = (SceneManager.data.currentRhythm / SceneManager.data.maxRhythm) * Constants.RhythmMeterMaxHeight;
  RhythmBar.assets[RhythmBarNames.RhythmBarText].asset.text = SceneManager.data.currentRhythm;
};

export const addSkillToQueue = (skillData) => {
  if (SceneManager.data.currentRhythm < skillData.rhythmCost) return;
  if (SceneManager.data.skillQueue.queue.length >= 3) return;
  let spellQueueButtonName = findAvailableSpellQueueButton();
  SceneManager.data.skillQueue.hash[spellQueueButtonName].active = true;
  SceneManager.data.skillQueue.hash[spellQueueButtonName].lastIndex = SceneManager.data.skillQueue.queue.length;
  SceneManager.data.skillQueue.hash[spellQueueButtonName].ref = {
    spellQueueButtonName,
    skill: skillData,
    target: SceneManager.data.selectedGoo,
    castProgress: skillData.beatsToCast
  };
  SceneManager.data.skillQueue.queue.push(
    SceneManager.data.skillQueue.hash[spellQueueButtonName].ref
  );
  const asset = SceneManager.assets
  [SceneNames.Battle].asset.assets
  [ComponentNames.GodZone].asset.assets
  [ComponentNames.RhythmBar].asset.assets
  [spellQueueButtonName].asset;
  asset.y = Constants.RhythmBarSpellQueueButtonPositions[SceneManager.data.skillQueue.hash[spellQueueButtonName].lastIndex];
  asset.alpha = 1;
  asset.interactive = true;
  asset.buttonMode = true;
  asset.assets[RhythmBarNames.RhythmBarSpellQueueButtonIcon].asset.texture = root.loader.resources[skillData.iconName].texture;
  asset.assets[RhythmBarNames.RhythmBarSpellQueueButtonCountdown].asset.text = skillData.beatsToCast;
  SceneManager.data.currentRhythm -= skillData.rhythmCost;
  setRhythmBarState();
};

export const cancelSkillFromQueue = (spellQueueButtonName) => {
  const asset = SceneManager.assets
  [SceneNames.Battle].asset.assets
  [ComponentNames.GodZone].asset.assets
  [ComponentNames.RhythmBar].asset.assets
  [spellQueueButtonName].asset;
  asset.alpha = 0;
  asset.interactive = false;
  asset.buttonMode = false;
  SceneManager.data.skillQueue.hash[spellQueueButtonName].active = false;
  const rhythmCost = SceneManager.data.skillQueue.hash[spellQueueButtonName].ref.skill.rhythmCost;
  const combined = SceneManager.data.currentRhythm + rhythmCost;
  SceneManager.data.currentRhythm = combined >= SceneManager.data.maxRhythm ? SceneManager.data.maxRhythm : combined;
  SceneManager.data.skillQueue.queue.splice(SceneManager.data.skillQueue.hash[spellQueueButtonName].lastIndex, 1);
  orderSkillQueue();
  setRhythmBarState();
};

export const castSkillFromQueue = () => {

};

const orderSkillQueue = () => {
  SceneManager.data.skillQueue.queue.forEach((queueData, index) => {
    if (queueData.lastIndex !== index) {
      const asset = SceneManager.assets
      [SceneNames.Battle].asset.assets
      [ComponentNames.GodZone].asset.assets
      [ComponentNames.RhythmBar].asset.assets
      [queueData.spellQueueButtonName].asset;
      SceneManager.data.skillQueue.hash[queueData.spellQueueButtonName].lastIndex = index;
      asset.y = Constants.RhythmBarSpellQueueButtonPositions[index];
    }
  });
};

const findAvailableSpellQueueButton = () => {
  for (let name in SceneManager.data.skillQueue.hash) {
    if (!SceneManager.data.skillQueue.hash[name].active) return name;
  }
};