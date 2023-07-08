import * as Phaser from 'phaser';
import { SUB_GOLD_EVENTS } from './gold-pubsub-events';

export default class HUDScene extends Phaser.Scene {
  private playerOneCoinTxt: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: 'HUDScene',
      active: true,
    });
  }

  create() {
    this.playerOneCoinTxt = this.add.text(50, 10, 'Gold: 0', {
      color: 'white',
      fontSize: '28px',
    });

    console.log('---- criou o playerOneCoinTxt ----');
    console.log(this.playerOneCoinTxt.getWrappedText());

    this.playerOneCoinTxt.setOrigin(0);
    const level = this.scene.get('MainScene');

    // create events
    level.events.on(
      SUB_GOLD_EVENTS.PLAYER_UPDATE_GOLD,
      this.updateGoldText,
      this
    );
  }

  updateGoldText(gold: number) {
    console.log('---- updateGoldText ----', gold);
    this.playerOneCoinTxt.setText(`Gold: ${gold}`);
  }
}
