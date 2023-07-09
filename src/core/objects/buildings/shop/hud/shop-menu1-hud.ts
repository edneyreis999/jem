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
      0x175682
    );
    Phaser.Display.Align.In.TopCenter(
      quantitySliderBackground,
      background,
      -10,
      -120
    );

    let quantitySliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x175682
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
      -10,
      -110
    );

    // -------------------- quantity text -----------------------

    let quantityText = this.add.text(0, 0, '495', {
      fontSize: '16px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 1,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.RightCenter(quantityText, background, -10, -10);

    // -------------------- price slidebar ----------------------

    let priceSliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      5,
      0xb25d0f
    );
    Phaser.Display.Align.In.TopCenter(
      priceSliderBackground,
      background,
      0,
      -175
    );

    let coinQuantitySell = this.add.sprite(0, 0, 'coin');
    coinQuantitySell.setOrigin(0.5, 0.5);
    coinQuantitySell.setDisplaySize(40, 40);
    coinQuantitySell.setScale(0.3);
    coinQuantitySell.setInteractive();
    coinQuantitySell.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene3');
    });
    Phaser.Display.Align.In.TopCenter(coinQuantitySell, background, 0, -165);

    let priceSliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0xb25d0f
    );
    priceSliderButton.setInteractive();
    priceSliderButton.on('drag', (pointer, dragX, dragY) => {
      priceSliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 95,
        this.cameras.main.centerX + 95
      );
    });
    this.input.setDraggable(priceSliderButton);
    Phaser.Display.Align.In.TopCenter(priceSliderButton, background, 0, -165);

    //   -------------- sell potion button ------------

    // total price background

    let sellPotionButton = this.add.sprite(0, 0, 'makePotion-button');
    sellPotionButton.setOrigin(0.5, 0.5);
    sellPotionButton.setDisplaySize(40, 40);
    sellPotionButton.setScale(1.2);
    sellPotionButton.setInteractive();
    sellPotionButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene3');
    });
    Phaser.Display.Align.In.BottomCenter(sellPotionButton, background, 0, -20);

    // total price text

    let totalSellPriceText = this.add.text(0, 0, '190000', {
      fontSize: '16px',
      color: '#ffffff',
      fontFamily: 'Courier New',
      strokeThickness: 1,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.BottomCenter(
      totalSellPriceText,
      background,
      30,
      -25
    );

    // total price coin

    let coinTotalSell = this.add.sprite(0, 0, 'coin');
    coinTotalSell.setOrigin(0.5, 0.5);
    coinTotalSell.setDisplaySize(25, 25);
    coinTotalSell.setScale(0.3);
    coinTotalSell.setInteractive();
    coinTotalSell.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene3');
    });
    Phaser.Display.Align.In.BottomCenter(coinTotalSell, background, -30, -10);
  }
}
