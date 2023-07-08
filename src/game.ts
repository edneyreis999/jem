import * as Phaser from 'phaser';
import HUDScene from './core/gold/gold-hud-scene';
import MainScene from './core/main-scene';
import { Menu1HudScene } from './core/objects/buildings/factory/hud/factory-menu1-hud';
import PreloadScene from './preload-scene';
import GameScene from './core/game-scene';
export default class Demo extends Phaser.Scene {
  constructor() {
    super('demo');
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  scale: {
      mode: Phaser.Scale.RESIZE,
      parent: 'phaser-example',
      width: 640,
      height: 960,
      min: {
          width: 320,
          height: 480
      },
      max: {
          width: 1920,
          height: 1400
      }
  },
scene: [PreloadScene, HUDScene, MainScene, Menu1HudScene, GameScene],
};

new Phaser.Game(config);
