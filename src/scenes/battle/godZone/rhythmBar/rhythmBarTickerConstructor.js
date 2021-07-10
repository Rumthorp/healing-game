import {
  root,
  SceneManager
} from '../../../../app';
import {
  RhythmBarNames
} from '../../../../static/names';
import { getRhythmBarHeight } from './rhythmBarUtils';
import { Constants } from '../../../../static/constants';

export default (RhythmBar) => {
  let previousBeat = SceneManager.conductor.beats;
  return () => {
    const currentBeat = SceneManager.conductor.beats;
    if (currentBeat > previousBeat && currentBeat > 2) {
      if (SceneManager.data.currentRhythm === SceneManager.data.maxRhythm) return;
      SceneManager.data.currentRhythm += 1;
      RhythmBar.assets[RhythmBarNames.RhythmBarMeterSprite].asset.height = getRhythmBarHeight(
        SceneManager.data.currentRhythm,
        SceneManager.data.maxRhythm,
        Constants.RhythmMeterMaxHeight
      );
      RhythmBar.assets[RhythmBarNames.RhythmBarText].asset.text = SceneManager.data.currentRhythm;
      previousBeat = currentBeat;
      return;
    }
    previousBeat = currentBeat;
  };
}