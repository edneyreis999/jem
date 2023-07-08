import * as Phaser from 'phaser';
export class FactoryMenuHudScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FactoryMenuHudScene' });
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

    let potionAButton = this.add.sprite(0,0, 'potionA-button');
    potionAButton.setOrigin(1, 0);
    potionAButton.setDisplaySize(200, 50);
    potionAButton.setInteractive();
    potionAButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2');
    });
    Phaser.Display.Align.In.TopCenter(potionAButton, background, 0, -50);


    let sliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      120,
      5,
      0x175682
    );
    Phaser.Display.Align.In.BottomCenter(sliderBackground, background, 0, -20);

    let sliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      20,
      0x175682
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
    Phaser.Display.Align.In.BottomCenter(sliderButton, background, 0, -5);


  }
}
