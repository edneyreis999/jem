import * as Phaser from 'phaser';
export class WarehouseMenuHudScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WarehouseMenuHudScene' });
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

    let closeButton = this.add.sprite(0, 0, 'close-button');
    closeButton.setOrigin(1, 0);
    closeButton.setDisplaySize(40, 40);
    closeButton.setScale(0.4);
    closeButton.setInteractive();
    closeButton.on('pointerdown', () => {
      this.scene.stop(this);
    });
    Phaser.Display.Align.In.TopRight(closeButton, background);

    // -------------------- warehouse upgrade ----------------------

    let warehouseUpgradeButton = this.add.sprite(0, 0, 'upgrade-button');
    warehouseUpgradeButton.setOrigin(0, 0);
    warehouseUpgradeButton.setDisplaySize(48, 48);
    warehouseUpgradeButton.setScale(0.5);
    warehouseUpgradeButton.setInteractive();
    warehouseUpgradeButton.on('pointerdown', () => {
      const levelUPText = this.add.text(0, 0, 'Level UP', {
        fontSize: '36px',
        color: '#ff0000',
        fontFamily: 'Courier New',
      });
      Phaser.Display.Align.In.TopCenter(levelUPText, background, 0, -20);
    });
    Phaser.Display.Align.In.TopLeft(
      warehouseUpgradeButton,
      background,
      -10,
      -10
    );

    // -------------------- potion COMMON storage ----------------------
    // sprite
    let potionCommonSprite = this.add.sprite(0, 0, 'potionA-button');
    potionCommonSprite.setOrigin(0, 0);
    potionCommonSprite.setDisplaySize(200, 356);
    potionCommonSprite.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(potionCommonSprite, background, -20, -60);

    // storage bar

    let sliderBackground = this.add.graphics();
    sliderBackground.lineStyle(2, 0x26150E);
    sliderBackground.strokeRoundedRect(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30,
      5
    );
    // sliderBackground.fillStyle(0x000, 50);
    // sliderBackground.fillRoundedRect(
    //   this.cameras.main.centerX - 130,
    //   this.cameras.main.centerY - 130,
    //   200,
    //   30,
    //   20
    // );

    let storage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    storage.setInteractive();

    Phaser.Display.Align.In.TopLeft(storage, background, -20, -60);

    // -------------------- potion UNCOMMON storage ----------------------
    let potionUncommonSprite = this.add.sprite(0, 0, 'potionB-button');
    potionUncommonSprite.setOrigin(0, 0);
    potionUncommonSprite.setDisplaySize(200, 356);
    potionUncommonSprite.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(
      potionUncommonSprite,
      background,
      -20,
      -130
    );

    // -------------------- potion RARE storage ----------------------
    let potionRareSprite = this.add.sprite(0, 0, 'potionC-button');
    potionRareSprite.setOrigin(0, 0);
    potionRareSprite.setDisplaySize(200, 356);
    potionRareSprite.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(potionRareSprite, background, -20, -200);

    // let title = this.add.text(0, 0, 'Warehouse menu', {
    //   fontSize: '32px',
    //   color: '#fff',
    // });
    // Phaser.Display.Align.In.TopLeft(title, background);

    // let sliderBackground = this.add.rectangle(
    //   this.cameras.main.centerX,
    //   this.cameras.main.centerY,
    //   100,
    //   20,
    //   0xff0000
    // );
    // let sliderButton = this.add.circle(
    //   this.cameras.main.centerX - 50,
    //   this.cameras.main.centerY,
    //   10,
    //   0xffffff
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
  }
}
