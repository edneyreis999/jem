import * as Phaser from 'phaser';
import { calcaulateBatchPotion } from '../../../../../game-rules/brew-batch-potion-utils';
import { PotionType } from '../../../potions/potion-interface';
import { FACTORY_PUB_EVENTS } from './factory-hud-pubsub-events';
export class FactoryMenuHudScene3 extends Phaser.Scene {
  constructor() {
    super({ key: 'FactoryMenuHudScene3' });
  }

  create() {
    let graphics = this.add.graphics();
    graphics.fillStyle(0xede1ca, 50);
    graphics.fillRoundedRect(
      this.cameras.main.centerX - 130,
      this.cameras.main.centerY - 130,
      260,
      260,
      20
    );
    let background = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      260,
      260
    );
    background.setInteractive();

    // let title = this.add.text(0, 0, 'Factory menu', {
    //   fontSize: '32px',
    //   color: '#fff',
    // });
    // Phaser.Display.Align.In.TopLeft(title, background);

    let closeButton = this.add.sprite(0, 0, 'close-button');
    closeButton.setOrigin(1, 0);
    closeButton.setDisplaySize(40, 40);
    closeButton.setScale(0.5);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      this.scene.stop(this);
    });
    Phaser.Display.Align.In.TopRight(closeButton, background);

    let sliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      5,
      0x175682
    );
    Phaser.Display.Align.In.TopCenter(sliderBackground, background, 0, -70);

    let sliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x175682
    );
    sliderButton.setInteractive();
    sliderButton.on('drag', (pointer, dragX, dragY) => {
      sliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 95,
        this.cameras.main.centerX + 95
      );
    });
    this.input.setDraggable(sliderButton);
    Phaser.Display.Align.In.TopCenter(sliderButton, background, 0, -60);

    // ------------ make lote button ------------

    let makeLoteButton = this.add.sprite(0, 0, 'makePotion-button');
    makeLoteButton.setOrigin(1, 0);
    makeLoteButton.setDisplaySize(40, 40);
    makeLoteButton.setScale(1);
    makeLoteButton.setInteractive();
    makeLoteButton.on('pointerdown', () => {
      // TODO - get the values from the slider and send to the game rules utils to calculate the batch potion
      const batchPotion = calcaulateBatchPotion({
        potionType: PotionType.COMMON,
        quantity: 1,
        bottleQuantity: 1,
        herbQuantity: 1,
        waterQuantity: 1,
      });
      const gameController = this.scene.get('MainScene');
      gameController.events.emit(
        FACTORY_PUB_EVENTS.FACTORY_BREWING_BATCH_POTION,
        batchPotion
      );
      this.scene.stop(this);
    });
    Phaser.Display.Align.In.BottomCenter(makeLoteButton, background, 0, -5);
  }
}
