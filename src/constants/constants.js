export const AppWidth = 1280;
export const AppHeight = 720;
export const GooHeartSize = 33;
export const GooHeartPositions = (() => {
  let positions = [];
  for (let i = 0; i < 10; i++) {
    let positionObj = {};
    positionObj.x = ((i % 5) * GooHeartSize) + 5;
    positionObj.y = (Math.floor(i / 5) * GooHeartSize) + 5;
    positions.push(positionObj);
  }
  return 
})();
export const GooGridPositions = (() => {
  let positions = [];
  for (let i = 0; i < 16; i ++) {
    let positionObj = {};
    positionObj.x = ((i % 4) * 180) + 280;
    positionObj.y = (Math.floor(i / 4) * 180) + 2.5;
    positions.push(positionObj);
  }
  return positions;
})();

//

export const SceneManagerName = 'SceneManager';
export const MainMenuSceneName = 'MainMenuScene';
export const BattleSceneName = 'BattleScene';

export const GooGridComponentName = 'GooGridComponent';
export const GooComponentName = 'GooComponent';
export const GooHeartsComponentName = 'GooHeartsComponent';

export const NewGameButtonName = 'NewGameButton';

export const GooBoxName = 'GooBox'