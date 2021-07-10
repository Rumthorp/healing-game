const AppWidth = 1280;
const AppHeight = 720;
const GooGridPadding = 110;
const GooGridSize = AppHeight - (GooGridPadding * 2); //600
const GooGridX = AppWidth - GooGridSize;
const GooGridY = (AppHeight - GooGridSize) / 2;
const GooGridDividerSpace = 12;
const GooBoxSize = (GooGridSize - (GooGridDividerSpace * 2)) / 3; //192
const GooBoxPadding = 5;
const SideAreaSize = ((AppWidth - GooGridSize) / 2);
const GooScale = 2;
const GooHeartDividerSpace = 3;
const GooHeartSize = (GooBoxSize - (GooHeartDividerSpace * 4) - (GooBoxPadding * 2)) / 5; //36
const GooGridPositions = (() => {
  let positions = [];
  for (let row = 0; row < 3; row ++) {
    positions.push([]);
    for (let column = 0; column < 3; column ++) {
      let positionObj = {};
      positionObj.x = (column * GooBoxSize) + (column * GooGridDividerSpace);
      positionObj.y = (row * GooBoxSize) + (row * GooGridDividerSpace);
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
const GodZoneWidth = 390;
const GodZoneSkillButtonPadding = 5;
const GodZoneSkillButtonWidth = (GodZoneWidth - (GodZoneSkillButtonPadding * 2)) / 3;
const GodZoneSkillPositions = (() => {
  let positions = [];
  for (let row = 1; row < 4; row ++) {
    positions.push([]);
    for (let column = 1; column < 4; column ++) {
      let positionObj = {};
      positionObj.x = (((column - 1) * GodZoneSkillButtonWidth) + ((column - 1) * GodZoneSkillButtonPadding));
      positionObj.y = AppHeight - ((row * GodZoneSkillButtonWidth) + (row * GodZoneSkillButtonPadding));
      positions[row - 1].push(positionObj);
    }
  }
  return positions;
})();
const RhythmMeterMaxHeight = 183;

export const Constants = {
  AppWidth,
  AppHeight,
  GooGridPadding,
  GooGridX,
  GooGridY,
  GooBoxSize,
  GooBoxPadding,
  SideAreaSize,
  GooScale,
  GooHeartSize,
  GooHeartDividerSpace,
  GooHeartPositions,
  GooGridPositions,
  GodZoneWidth,
  GodZoneSkillButtonWidth,
  GodZoneSkillPositions,
  RhythmMeterMaxHeight
};