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
    this.load.image('close-button', 'assets/close-button.png');

    // factoryMenu1
    this.load.image('potionA-button', 'assets/potionAButton.png');
    this.load.image('potionB-button', 'assets/potionBButton.png');
    this.load.image('potionC-button', 'assets/potionCButton.png');

    // factoryMenu2
    this.load.image('water', 'assets/water.png');
    this.load.image('herbA', 'assets/herbA.png');
    this.load.image('herbB', 'assets/herbB.png');
    this.load.image('herbC', 'assets/herbC.png');
    this.load.image('bottleA', 'assets/bottleA.png');
    this.load.image('bottleB', 'assets/bottleB.png');
    this.load.image('bottleC', 'assets/bottleC.png');

    this.load.image('makePotion-button', 'assets/makePotionButton.png');



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
