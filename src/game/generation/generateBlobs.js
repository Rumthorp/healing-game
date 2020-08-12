import * as PIXI from 'pixi.js';

import { removeHealth, addHealth } from '../../redux/slices/blobStatsSlice';
import { addUpdate } from '../../redux/slices/updateSlice';
import store from '../../redux/configureStore';

const blobStatsState = store.getState().blobStats;
const allBlobsContainer = new PIXI.Container();
const fullHeartTexture = PIXI.Texture.from('../../../assets/full-heart.png');
const emptyHeartTexture = PIXI.Texture.from('../../../assets/empty-heart.png');
const borderTexture = PIXI.Texture.from('../../../assets/grey-box.png');

const onClick = (blobIndex) => {
  let blobStatsState = store.getState().blobStats[blobIndex];
  if (blobStatsState.currentHealth < blobStatsState.maxHealth) {
    store.dispatch(addHealth(blobIndex));
    store.dispatch(addUpdate({ blobIndex, type: 'health' }));
  }
};

for (let i = 0; i < 16; i++) {
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
  blobContainer.on('pointerdown', () => onClick(blobContainer.index));
  allBlobsContainer.addChild(blobContainer);
}

export { allBlobsContainer };
