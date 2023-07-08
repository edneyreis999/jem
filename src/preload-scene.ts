import * as Phaser from 'phaser';
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('potion-shop', 'assets/potion-shop.jpg');
    this.load.image('potion-factory', 'assets/potion-factory.jpg');
    this.load.image('potion-warehouse', 'assets/potion-warehouse.jpg');
    this.load.image('close-button', 'assets/close-button.png');
    this.load.image('libs', 'assets/libs.png');
    this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
    this.load.glsl('stars', 'assets/starfields.glsl.js');
    this.load.json('game-static-data', 'static-data/game.json');
  }

  create() {
    this.scene.start('MainScene');
    this.scene.moveAbove('MainScene', 'HUDScene');
  }
}
