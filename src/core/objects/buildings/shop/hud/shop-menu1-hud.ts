import * as Phaser from 'phaser';
export class ShopMenuHudScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ShopMenuHudScene' });
  }

  create() {
    let background = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      300,
      500,
      0x000000
    );
    background.setInteractive();

    let title = this.add.text(0, 0, 'Shop menu', {
      fontSize: '32px',
      color: '#fff',
    });
    Phaser.Display.Align.In.TopLeft(title, background);

    let closeButton = this.add.sprite(0, 0, 'close-button');
    closeButton.setOrigin(1, 0);
    closeButton.setDisplaySize(40, 40);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      this.scene.stop(this);
    });
    Phaser.Display.Align.In.TopRight(closeButton, background);

    let sliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      100,
      20,
      0xff0000
    );
    let sliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0xffffff
    );
    sliderButton.setInteractive();
    sliderButton.on('drag', (pointer, dragX, dragY) => {
      sliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 50,
        this.cameras.main.centerX + 50
      );
    });
    this.input.setDraggable(sliderButton);
  }
}
