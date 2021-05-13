const AppWidth = 1280;
const AppHeight = 720;
const GooGridPadding = 60;
const GooGridSize = AppHeight - (GooGridPadding * 2); //600
const GooGridDividerSpace = 12;
const GooBoxSize = (GooGridSize - (GooGridDividerSpace * 2)) / 3; //192
const GooBoxPadding = 5;
const SideAreaSize = ((AppWidth - GooGridSize) / 2); //
const GooScale = 2;
const GooHeartDividerSpace = 3;
const GooHeartSize = (GooBoxSize - (GooHeartDividerSpace * 4) - (GooBoxPadding * 2)) / 5; //36
const GooGridPositions = (() => {
  let positions = [];
  for (let row = 0; row < 3; row ++) {
    positions.push([]);
    for (let column = 0; column < 3; column ++) {
      let positionObj = {};
      positionObj.x = ((column % 3) * (GooBoxSize + (column % 3 !== 3 ? GooGridDividerSpace : 0))) + SideAreaSize;
      positionObj.y = ((row % 3) * (GooBoxSize + (row % 3 !== 3 ? GooGridDividerSpace : 0))) + GooGridPadding;
      positions[row].push(positionObj);
    }
  }
  return positions;
})();
const GooHeartPositions = (() => {
  let positions = [];
  for (let i = 0; i < 10; i++) {
    let positionObj = {};
    positionObj.x = ((i % 5) * (GooHeartSize + (i % 5 !== 5 ? GooHeartDividerSpace : 0))) + GooBoxPadding;
    positionObj.y = i > 4 ?  GooBoxSize - GooHeartSize - GooBoxPadding : GooBoxPadding;
    positions.push(positionObj);
  }
  return positions;
})();

export const Constants = {
  AppWidth,
  AppHeight,
  GooGridPadding,
  GooBoxSize,
  GooBoxPadding,
  SideAreaSize,
  GooScale,
  GooHeartSize,
  GooHeartDividerSpace,
  GooHeartPositions,
  GooGridPositions
};



