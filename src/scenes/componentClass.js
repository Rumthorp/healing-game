import { root } from "../app";

import * as PIXI from 'pixi.js';

export default class extends PIXI.Container {
  constructor(componentName) {
    super();
    this.assets = {};
    this.name = componentName;
  }

  createAsset(type, assetData, addAsset, texture) {
    let asset;
    if (type === 'graphic') asset = assetData.create(new PIXI.Graphics());
    if (type === 'sprite') asset = new PIXI.Sprite.from(texture);
    if (type === 'component') asset = assetData;
    if (type === 'text') asset = new PIXI.BitmapText('', { fontName: assetData.fontName });
    if (type === 'sprite' || type === 'text') {
      for (let propertyName in assetData) {
        if (propertyName === 'anchor') {
          asset.anchor.set(...assetData[propertyName]);
          continue;
        }
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
      type
    }
    if (addAsset) {
      this.addAsset(assetData.name);
    }
    asset.selfDestruct = () => {
      this.destroyAsset(assetData.name);
    }
    return asset;
  }

  addAsset(name) {
    this.addChild(this.assets[name].asset);
    this.assets[name].asset.active = true;
  }

  removeAsset(name, recursive) {
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