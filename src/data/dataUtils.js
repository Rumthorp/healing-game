export const generateInitialGooState = (amount, maxHealth) => {
  const goo = {};
  for (let i = 0; i < amount; i ++) {
    goo[i] = {
      health: maxHealth,
      maxHealth,
      gridIndex: i
    };
  }
  return goo;
};