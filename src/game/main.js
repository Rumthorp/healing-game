import * as PIXI from 'pixi.js';

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

const graphics = new PIXI.Graphics();

graphics.beginFill(0xDE3249);
for(let i = 0; i < 16; i++) {
  graphics.drawRect(((i % 4) * 175) + 290, Math.floor(i / 4) * 175, 170, 170);
}
graphics.endFill();

app.stage.addChild(graphics);
