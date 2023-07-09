import * as Phaser from 'phaser';
export class ShopMenuHudScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ShopMenuHudScene' });
  }

  create() {
    // -------------------- pop-up basic config  ----------------------

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

    let closeButton = this.add.sprite(0, 0, 'close-button');
    closeButton.setOrigin(1, 0);
    closeButton.setDisplaySize(40, 40);
    closeButton.setScale(0.4);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      this.scene.stop(this);
    });
    Phaser.Display.Align.In.TopRight(closeButton, background);

    // -------------------- quantity slidebar ----------------------

    let quantitySliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      5,
      0xb25d0f
    );
    Phaser.Display.Align.In.TopCenter(
      quantitySliderBackground,
      background,
      0,
      -120
    );

    let quantitySliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0xb25d0f
    );
    quantitySliderButton.setInteractive();
    quantitySliderButton.on('drag', (pointer, dragX, dragY) => {
      quantitySliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 95,
        this.cameras.main.centerX + 95
      );
    });
    this.input.setDraggable(quantitySliderButton);
    Phaser.Display.Align.In.TopCenter(
      quantitySliderButton,
      background,
      0,
      -110
    );

    //   -------------- sell potion button ------------

    let sellPotionButton = this.add.sprite(0, 0, 'makePotion-button');
    sellPotionButton.setOrigin(1, 0);
    sellPotionButton.setDisplaySize(40, 40);
    sellPotionButton.setScale(1);
    sellPotionButton.setInteractive();
    sellPotionButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene3');
    });
    Phaser.Display.Align.In.BottomCenter(sellPotionButton, background, 0, -5);
  }
}
