import app from "../app";

import * as PIXI from 'pixi.js';

export default class {
  constructor(sceneName) {
    this.container = new PIXI.Container();
    this.assets = {};
    this.tickers = {};
    this.container.name = sceneName;
  }

  createTicker(tickerConstructor, tickerName) {
    this.tickers[tickerName] = {
      active: false,
      ticker: tickerConstructor()
    }
  }

  startTicker(tickerName) {
    app.ticker.add(this.tickers[tickerName].ticker);
  }

  refreshTicker(tickerConstructor, tickerName) {
    if (this.tickers[tickerName].active) {
      app.ticker.remove(this.tickers[tickerName]);
      this.tickers[tickerName].ticker = tickerConstructor();
      app.ticker.add(this.tickers[tickerName].ticker);
    }
  }

  stopTicker(tickerName) {
    app.ticker.remove(this.tickers[tickerName].ticker);
    this.tickers[tickerName].active = false;
  }

  deleteTicker(tickerName) {
    app.ticker.remove(this.tickers[tickerName].ticker);
    delete this.tickers[tickerName];
  }
};