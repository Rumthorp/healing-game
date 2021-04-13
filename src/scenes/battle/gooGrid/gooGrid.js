import * as PIXI from 'pixi.js';

import store from '../../../store';
import { NumberOfGoo } from '../../../constants/constants';

const fullHeartTexture = PIXI.Texture.from('../../../../assets/goo/full-heart.png');
const borderTexture = PIXI.Texture.from('../../../../assets/goo/grey-box');

const onClick = (blobIndex, one, two) => {
  console.log(blobIndex, one, two)
  let blobStatsState = store.getState().blobStats[blobIndex];
  if (blobStatsState.currentHealth < blobStatsState.maxHealth) {
    store.dispatch(addHealth(blobIndex));
    store.dispatch(addUpdate({ blobIndex, type: 'health' }));
  }
};

for (let i = 0; i < numberOfBlobs; i++) {
  const blobContainer = new PIXI.Container();
  blobContainer.name = i;
  const heartContainer = new PIXI.Container();
  heartContainer.name = 'heartContainer';
  const border = new PIXI.Sprite(borderTexture);
  border.name = 'border';
  for (let k = 0; k < blobStatsState[i].maxHealth; k++) {
    const heart = new PIXI.Sprite(k + 1 <= blobStatsState[i].currentHealth ? fullHeartTexture : emptyHeartTexture);
    heart.width = 33;
    heart.height = 33;
    heart.x = ((k % 5) * 33) + 5;
    heart.y = (Math.floor(k / 5) * 33) + 5;
    heartContainer.addChild(heart);
  }
  blobContainer.addChild(border, heartContainer);
  blobContainer.x = ((i % 4) * 180) + 280;
  blobContainer.y = (Math.floor(i / 4) * 180) + 2.5;
  blobContainer.interactive = true;
  blobContainer.index = i;
  blobContainer.on('pointerdown', (one, two) => onClick(blobContainer.index, one, two));
  allBlobsContainer.addChild(blobContainer);
}

export { allBlobsContainer };

const createGooGrid = () => {
  const gooArray = store.getState().gooGrid.goo;
  const GooGridContainer = new PIXI.Container();
  GooGridContainer.name = 'GooGridContainer';
  for (let i = 0; i < NumberOfGoo; i ++) {
    const gooContainer = new PIXI.Container();
    gooContainer.name = 'gooContainer-0';
    const heartContainer = new PIXI.Container();
    heartContainer.name = 'heartContainer';
    const border = new PIXI.Sprite(borderTexture);
    border.name = 'border';
    const goo
  }

  return GooGridContainer;
};