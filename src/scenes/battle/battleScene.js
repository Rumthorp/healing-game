const fullHeartTexture = PIXI.Texture.from('../../assets/full-heart.png');
const emptyHeartTexture = PIXI.Texture.from('../../assets/empty-heart.png');

class BattleScene


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