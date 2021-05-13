import { Constants } from '../static/constants';

export const generateInitialGooState = (maxHealth) => {
  const goo = [];
  Constants.GooGridPositions.forEach((rowArray, rowIndex) => {
    goo.push([]);
    rowArray.forEach((positionObj, index) => {
      goo[rowIndex].push(
        {
          currentHealth: maxHealth,
          maxHealth
        }
      );
    });
  });
  return goo;
};