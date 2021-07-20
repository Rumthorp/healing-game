import {
  SceneManager
} from '../../../../app';
import {
  SceneNames,
  ComponentNames,
  GooNames
} from '../../../../static/names';

export const onGooClick = (rowIndex, columnIndex) => {
  let goos = SceneManager.assets[SceneNames.Battle].asset
  .assets[ComponentNames.ActionZone].asset
  .assets[ComponentNames.GooGrid].asset
  .assets;
  for(let gooName in goos) {
    if (`${ComponentNames.Goo}-${rowIndex}-${columnIndex}` === gooName) {
      goos[gooName].asset.assets[GooNames.GooBox].asset.alpha = 1;
      continue;
    }
    goos[gooName].asset.assets[GooNames.GooBox].asset.alpha = 0;
  }
};