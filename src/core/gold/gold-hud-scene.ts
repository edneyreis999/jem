import * as Phaser from 'phaser';
import { SUB_GOLD_EVENTS } from './gold-pubsub-events';

export default class HUDScene extends Phaser.Scene {
  private playerCoinTxt: Phaser.GameObjects.Text;
  private playerTime: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: 'HUDScene',
      active: true,
    });
  }

  preload(){
    this.load.image('coin', 'assets/coin.png');
    this.load.image('time-icon', 'assets/time-icon.png')

  }

  create() {
    let graphics = this.add.graphics();
    graphics.fillStyle(0xede1ca, 50);
    graphics.fillRoundedRect(20, 20, 200, 30, 5);

    let coin = this.add.sprite(25, 22, 'coin');
    coin.setOrigin(0, 0);
    coin.setDisplaySize(20, 24);

    this.playerCoinTxt = this.add.text(55, 25, '0', {
      color: '#26150E',
      fontSize: '24px',
      fontFamily: 'Courier New',
      stroke: '#26150E',
      strokeThickness: 2,
    });

    this.playerCoinTxt.setOrigin(0);
    const level = this.scene.get('MainScene');

    // create events
    level.events.on(
      SUB_GOLD_EVENTS.PLAYER_UPDATE_GOLD,
      this.updateGoldText,
      this
    );

    let timeIcon = this.add.sprite(140, 22, 'time-icon');
    timeIcon.setOrigin(0, 0);
    timeIcon.setDisplaySize(24,24);

    this.playerTime = this.add.text(165, 25, '365', {
      color: '#26150E',
      fontSize: '24px',
      fontFamily: 'Courier New',
      stroke: '#26150E',
      strokeThickness: 2,
    });

    this.playerTime.setOrigin(0);


  
  
  }

  updateGoldText(gold: number) {
    this.playerCoinTxt.setText(`${gold}`);
  }  
}
