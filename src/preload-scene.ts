import * as Phaser from 'phaser';
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image('background', 'assets/background.jpg');
    this.load.image('potion-shop', 'assets/sell_button.png');
    this.load.image('potion-factory', 'assets/prod_button.png');
    this.load.image('potion-warehouse', 'assets/keep_button.png');
    this.load.image('close-button', 'assets/close-button.svg');
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
