import * as Phaser from 'phaser';
import HUDScene from './core/gold/gold-hud-scene';
import MainScene from './core/main-scene';
import { FactoryMenuHudScene } from './core/objects/buildings/factory/hud/factory-menu1-hud';
import { ShopMenuHudScene } from './core/objects/buildings/shop/hud/shop-menu1-hud';
import { WarehouseMenuHudScene } from './core/objects/buildings/warehouse/hud/warehouse-menu1-hud';
import PreloadScene from './preload-scene';
import { FactoryMenuHudScene2 } from './core/objects/buildings/factory/hud/factory-menu2-hud';
import { FactoryMenuHudScene3 } from './core/objects/buildings/factory/hud/factory-menu3-hud';
export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    width: 512,
    height: 512,
    min: {
      width: 320,
      height: 480,
    },
    max: {
      width: 1920,
      height: 1400,
    },
  },
  scene: [
    PreloadScene,
    HUDScene,
    MainScene,
    FactoryMenuHudScene,
    FactoryMenuHudScene2,
    FactoryMenuHudScene3,
    ShopMenuHudScene,
    WarehouseMenuHudScene,
  ],
};

new Phaser.Game(config);
