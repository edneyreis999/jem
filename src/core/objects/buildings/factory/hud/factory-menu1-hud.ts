import * as Phaser from 'phaser';
export class FactoryMenuHudScene extends Phaser.Scene {
  constructor() {
    super({ key: 'FactoryMenuHudScene' });
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

    // -------------------- potion A button ----------------------

    let potionAButton = this.add.sprite(0, 0, 'potionA-button');
    potionAButton.setOrigin(1, 0);
    potionAButton.setDisplaySize(65, 50);
    potionAButton.setInteractive();
    potionAButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2');
    });
    Phaser.Display.Align.In.TopLeft(potionAButton, background, -20, -55);

    let pricePotionA = this.add.text(0, 0, '10.000', {
      fontSize: '40px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(pricePotionA, background, -10, -60);

    // -------------------- potion B button ----------------------

    let potionBButton = this.add.sprite(0, 0, 'potionB-button');
    potionBButton.setOrigin(1, 0);
    potionBButton.setDisplaySize(65, 50);
    potionBButton.setInteractive();
    potionBButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2');
    });
    Phaser.Display.Align.In.TopLeft(potionBButton, background, -20, -125);

    let pricePotionB = this.add.text(0, 0, '20.000', {
      fontSize: '40px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(pricePotionB, background, -10, -130);

    // -------------------- potion C button ----------------------

    let potionCButton = this.add.sprite(0, 0, 'potionC-button');
    potionCButton.setOrigin(1, 0);
    potionCButton.setDisplaySize(65, 50);
    potionCButton.setInteractive();
    potionCButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2');
    });
    Phaser.Display.Align.In.TopLeft(potionCButton, background, -20, -195);

    let pricePotionC = this.add.text(0, 0, '50.000', {
      fontSize: '40px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(pricePotionC, background, -10, -200);







    // -------------------- slidebar ----------------------

    // let sliderBackground = this.add.rectangle(
    //   this.cameras.main.centerX,
    //   this.cameras.main.centerY,
    //   120,
    //   5,
    //   0x175682
    // );
    // Phaser.Display.Align.In.BottomCenter(sliderBackground, background, 0, -20);

    // let sliderButton = this.add.circle(
    //   this.cameras.main.centerX - 50,
    //   this.cameras.main.centerY,
    //   20,
    //   0x175682
    // );
    // sliderButton.setInteractive();
    // sliderButton.on('drag', (pointer, dragX, dragY) => {
    //   sliderButton.x = Phaser.Math.Clamp(
    //     dragX,
    //     this.cameras.main.centerX - 50,
    //     this.cameras.main.centerX + 50
    //   );
    // });
    // this.input.setDraggable(sliderButton);
    // Phaser.Display.Align.In.BottomCenter(sliderButton, background, 0, -5);
  }
}
