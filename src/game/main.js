import * as PIXI from 'pixi.js';

import store from '../redux/configureStore';
import { allBlobsContainer } from './generation/generateBlobs';
import { removeUpdates } from '../redux/slices/updateSlice';

console.log(allBlobsContainer);

const fullHeartTexture = PIXI.Texture.from('../../assets/full-heart.png');
const emptyHeartTexture = PIXI.Texture.from('../../assets/empty-heart.png');

const WIDTH = 1280;
const HEIGHT = 720;

const app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT,
  autoDensity: true,
  resolution: window.devicePixelRatio
});

const resize = (app) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let newViewportWidth;
  let newViewportHeight;
  if (viewportHeight / viewportWidth < HEIGHT / WIDTH) {
    newViewportHeight = viewportHeight;
    newViewportWidth = (newViewportHeight * WIDTH) / HEIGHT;
  } else {
    newViewportWidth = viewportWidth;
    newViewportHeight = (newViewportWidth * HEIGHT) / WIDTH;
  }
  app.renderer.resize(newViewportWidth, newViewportHeight);
  app.stage.scale.set(newViewportWidth / WIDTH, newViewportHeight / HEIGHT);
}

resize(app);
document.getElementById('pixi-root').append(app.view);
window.addEventListener("resize", () => resize(app));

const updateHealth = (blobIndex, blobState) => {
  allBlobsContainer.children[blobIndex].children.find(child => child.name ==='heartContainer').children.forEach((heart, index) => {
    blobState.currentHealth >= index + 1 ? heart.texture = fullHeartTexture : emptyHeartTexture;
  });
};

app.stage.addChild(allBlobsContainer);

app.ticker.add((delta) => {
  const {
    blobStats: blobStatsState,
    update: updateState
  } = store.getState();
  const completedUpdates = [];
  if (Object.keys(updateState).length !== 0) {
    for(const updateId in updateState) {
      if (updateState[updateId].type === 'health') {
        updateHealth(updateState[updateId].blobIndex, blobStatsState[updateState[updateId].blobIndex]);
        completedUpdates.push(updateId);
      }
    }
    store.dispatch(removeUpdates(completedUpdates));
  }
});
