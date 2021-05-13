import { root } from "../app";

import * as PIXI from 'pixi.js';

export default class extends PIXI.Container {
  constructor(sceneName) {
    super();
    this.assets = {};
    this.tickers = {};
    this.name = sceneName;
  }

  createTicker(tickerConstructor, tickerName) {
    let args = [...arguments];
    let passArgs = false;
    if (args.length > 2) {
      args.splice(0, 2);
      passArgs = true;
    }
    this.tickers[tickerName] = {
      active: false,
      ticker: passArgs ? tickerConstructor(...args) : tickerConstructor()
    }
  }

  startTicker(tickerName) {
    this.tickers[tickerName].active = true;
    root.ticker.add(this.tickers[tickerName].ticker);
  }

  refreshTicker(tickerConstructor, tickerName) {
    if (this.tickers[tickerName].active) {
      root.ticker.remove(this.tickers[tickerName]);
      this.tickers[tickerName].ticker = tickerConstructor();
      root.ticker.add(this.tickers[tickerName].ticker);
    }
  }

  stopTicker(tickerName) {
    root.ticker.remove(this.tickers[tickerName].ticker);
    this.tickers[tickerName].active = false;
  }

  stopAllTickers() {
    for (let tickerName in this.tickers) {
      if (this.tickers[tickerName].active) this.stopTicker(tickerName);
    }
  }

  deleteTicker(tickerName) {
    root.ticker.remove(this.tickers[tickerName].ticker);
    delete this.tickers[tickerName];
  }

  createAsset(type, assetData, addAsset, texture) {
    let asset;
    if (type === 'sprite') {
      asset = new PIXI.Sprite.from(texture);
    }
    if (type === 'animatedSprite') {
      asset = new PIXI.AnimatedSprite(texture);
    }
    if (type === 'component') {
      asset = assetData;
    }
    if (type === 'animatedSprite' || type === 'sprite') {
      for (let propertyName in assetData) {
        if (typeof assetData[propertyName] === 'function') {
          let props = assetData[propertyName]();
          asset[propertyName](...props);
          continue;
        }
        asset[propertyName] = assetData[propertyName];
      }
    }
    this.assets[assetData.name] = {
      asset,
      type,
      active: false
    }
    if (addAsset) {
      this.addAsset(assetData.name);
    }
    return asset;
  }

  addAsset(name) {
    this.addChild(this.assets[name].asset);
    this.assets[name].asset.active = true;
  }

  removeAsset(name, stopTickers, recursive) {
    if (stopTickers) this.stopAllTickers();
    if (recursive) {
      for (let assetName in this.assets) {
        if (this.assets[assetName].type === 'component') this.assets[assetName].asset.removeAsset(null, true, true);
      }
    }
    if (name) {
      this.removeChild(this.assets[name].asset);
      this.assets[name].asset.active = false;
    }
  }

  destroyAsset(name) {
    let asset = this.assets[name].asset
    this.removeChild(asset);
    asset.destroy();
    delete this.assets[name];
  }
};