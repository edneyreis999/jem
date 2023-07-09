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

    let commonStorageBackground = this.add.graphics();
    commonStorageBackground.lineStyle(2, 0x26150e);
    commonStorageBackground.strokeRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY - 65,
      200,
      30,
      5
    );
    let commonStorage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    commonStorage.setInteractive();
    Phaser.Display.Align.In.TopLeft(commonStorage, background, -20, -60);

    let commonStorageUsageBackground = this.add.graphics();
    commonStorageUsageBackground.fillStyle(0xb25d0f, 1);
    commonStorageUsageBackground.fillRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY - 64,
      60,
      28,
      5
    );
    let commonStorageUsage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    commonStorageUsage.setInteractive();
    Phaser.Display.Align.In.TopLeft(commonStorageUsage, background, -20, -60);

    let quantityCommonPotion = this.add.text(0, 0, '30/100', {
      fontSize: '16px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(
      quantityCommonPotion,
      background,
      -80,
      -72
    );

    // -------------------- potion UNCOMMON storage ----------------------
    let potionUncommonSprite = this.add.sprite(0, 0, 'potionB-button');
    potionUncommonSprite.setOrigin(0, 0);
    potionUncommonSprite.setDisplaySize(200, 356);
    potionUncommonSprite.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(
      potionUncommonSprite,
      background,
      -20,
      -110
    );

    // storage bar

    let uncommonStorageBackground = this.add.graphics();
    uncommonStorageBackground.lineStyle(2, 0x26150e);
    uncommonStorageBackground.strokeRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY - 15,
      200,
      30,
      5
    );
    let uncommonStorage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    uncommonStorage.setInteractive();
    Phaser.Display.Align.In.TopLeft(uncommonStorage, background, -20, -10);

    let uncommonStorageUsageBackground = this.add.graphics();
    uncommonStorageUsageBackground.fillStyle(0x6e1413, 1);
    uncommonStorageUsageBackground.fillRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY - 14,
      60,
      28,
      5
    );
    let uncommonStorageUsage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    uncommonStorageUsage.setInteractive();
    Phaser.Display.Align.In.TopLeft(uncommonStorageUsage, background, -20, -10);

    let quantityUncommonPotion = this.add.text(0, 0, '30/100', {
      fontSize: '16px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(
      quantityUncommonPotion,
      background,
      -80,
      -122
    );

    // -------------------- potion RARE storage ----------------------
    let potionRareSprite = this.add.sprite(0, 0, 'potionC-button');
    potionRareSprite.setOrigin(0, 0);
    potionRareSprite.setDisplaySize(200, 356);
    potionRareSprite.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(potionRareSprite, background, -20, -160);

    // storage bar

    let rareStorageBackground = this.add.graphics();
    rareStorageBackground.lineStyle(2, 0x26150e);
    rareStorageBackground.strokeRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY + 35,
      200,
      30,
      5
    );
    let rareStorage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    rareStorage.setInteractive();
    Phaser.Display.Align.In.TopLeft(rareStorage, background, -20, 30);

    let rareStorageUsageBackground = this.add.graphics();
    rareStorageUsageBackground.fillStyle(0x250944, 1);
    rareStorageUsageBackground.fillRoundedRect(
      this.cameras.main.centerX - 80,
      this.cameras.main.centerY + 36,
      60,
      28,
      5
    );
    let rareStorageUsage = this.add.zone(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      30
    );
    rareStorageUsage.setInteractive();
    Phaser.Display.Align.In.TopLeft(rareStorageUsage, background, -20, 30);

    let quantityRarePotion = this.add.text(0, 0, '30/100', {
      fontSize: '16px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(quantityRarePotion, background, -80, -172);



    // ------------------ STORAGE TOTAL ----------------

    let quantityStorageTotal = this.add.text(0, 0, '90/100', {
      fontSize: '24px',
      color: '#26150E',
      fontFamily: 'Courier New',
      strokeThickness: 2,
      stroke: '#26150E',
    });
    Phaser.Display.Align.In.TopRight(quantityStorageTotal, background, -80, -222);


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
