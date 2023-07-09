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
    this.load.image('coin', 'assets/coin.png');
    this.load.image('upgrade-button', 'assets/upgrade-button.png');


    // factoryMenu1
    this.load.image('potionA-button', 'assets/potionA.png');
    this.load.image('potionB-button', 'assets/potionB.png');
    this.load.image('potionC-button', 'assets/potionC.png');


    // factoryMenu2
    this.load.image('water', 'assets/water.png');
    this.load.image('herb-common', 'assets/herb-common.png');
    this.load.image('herb-uncommon', 'assets/herb-uncommon.png');
    this.load.image('herb-rare', 'assets/herb-rare.png');
    this.load.image('bottle-common', 'assets/bottle-common.png');
    this.load.image('bottle-uncommon', 'assets/bottle-uncommon.png');
    this.load.image('bottle-rare', 'assets/bottle-rare.png');

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
