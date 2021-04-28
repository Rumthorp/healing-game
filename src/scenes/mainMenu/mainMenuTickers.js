export const buildMainMenuTicker = () => {
  let timer = 0;
  const ticker = (delta) => {
    if (timer % 60 <= 1) {
      console.log(`ticker 1: ${timer}`);
    }
    timer += delta;
  };
  return ticker;
};

export const buildMainMenuTestTicker = (sprite) => {
  let timer = 0;
  const ticker = (delta) => {
    if (timer % 60 <= 1) {
      console.log(sprite);
    }
    sprite.rotation += .1 * delta;
    timer += delta;
  };
  return ticker;
};