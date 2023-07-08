import * as Phaser from 'phaser';
export class FactoryMenuHudScene2 extends Phaser.Scene {
  constructor() {
    super({ key: 'FactoryMenuHudScene2' });
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

    // let water = this.add.sprite(0,0, 'water');
    // water.setOrigin(1, 0);
    // water.setDisplaySize(375, 744);
    // water.setScale(0.2);

    // // water.setInteractive();
    // // water.on('pointerdown', () => {
    // //   this.scene.stop(this);
    // // });
    // Phaser.Display.Align.In.LeftCenter(water, background);

    let waterSliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      120,
      5,
      0x175682
    );
    Phaser.Display.Align.In.TopCenter(
      waterSliderBackground,
      background,
      0,
      -70
    );

    let waterSliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x175682
    );
    waterSliderButton.setInteractive();
    waterSliderButton.on('drag', (pointer, dragX, dragY) => {
      waterSliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 50,
        this.cameras.main.centerX + 50
      );
    });
    this.input.setDraggable(waterSliderButton);
    Phaser.Display.Align.In.TopCenter(waterSliderButton, background, 0, -60);

    // --------------- Ingredient A Slider Button -------------
    let ingASliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      120,
      5,
      0x8b2947
    );
    Phaser.Display.Align.In.TopCenter(
      ingASliderBackground,
      background,
      0,
      -120
    );

    let ingASliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x8b2947
    );
    ingASliderButton.setInteractive();
    ingASliderButton.on('drag', (pointer, dragX, dragY) => {
      ingASliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 50,
        this.cameras.main.centerX + 50
      );
    });
    this.input.setDraggable(ingASliderButton);
    Phaser.Display.Align.In.TopCenter(ingASliderButton, background, 0, -110);

    //   -------------- make potion button ------------

    let makePotionButton = this.add.sprite(0, 0, 'makePotion-button');
    makePotionButton.setOrigin(1, 0);
    makePotionButton.setDisplaySize(40, 40);
    makePotionButton.setScale(1);
    makePotionButton.setInteractive();
    makePotionButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene3');
    });
    Phaser.Display.Align.In.BottomCenter(makePotionButton, background, 0, -5);
  }
}
