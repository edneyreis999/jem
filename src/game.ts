import * as Phaser from 'phaser';
import HUDScene from './core/gold/gold-hud-scene';
import MainScene from './core/main-scene';
import { Menu1HudScene } from './core/objects/buildings/factory/hud/factory-menu1-hud';
import PreloadScene from './preload-scene';
export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#606253',
  width: 800,
  height: 600,
  scene: [PreloadScene, HUDScene, MainScene, Menu1HudScene],
};

const game = new Phaser.Game(config);
