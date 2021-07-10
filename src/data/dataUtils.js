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

export const generateInitialSkillState = (skillArray) => {
  const skills = [];
  let counter = 0;
  Constants.GodZoneSkillPositions.forEach((rowArray, rowIndex) => {
    skills.push([]);
    rowArray.forEach((positionObj, index) => {
      let skillName = skillArray[counter];
      if (skillName === undefined) skillName = skillArray[0];
      skills[rowIndex].push({
        name: skillName
      });
      counter ++;
    });
  });
  return skills;
};