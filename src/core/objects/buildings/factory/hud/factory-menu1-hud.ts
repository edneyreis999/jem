import * as Phaser from 'phaser';
import { GameStaticData } from '../../../../interfaces/game-static-data';
import {
  Common,
  Rare,
  Uncommon,
} from '../../../../interfaces/potion-static-data';
import { PotionType } from '../../../potions/potion-interface';

export interface SceneInitProps {
  potionType: PotionType;
}
export class FactoryMenuHudScene extends Phaser.Scene {
  private potionStaticData: Common | Uncommon | Rare;

  constructor() {
    super({ key: 'FactoryMenuHudScene' });
  }

  init(data: SceneInitProps) {
    const { potionType } = data;
    const STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    this.potionStaticData = STATIC_DATA.potion.type[potionType];
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

    // -------------------- potion COMMON button ----------------------

    let potionAButton = this.add.sprite(0, 0, 'potionA-button');
    potionAButton.setOrigin(0, 0);
    potionAButton.setDisplaySize(200, 356);
    potionAButton.setScale(0.1);
    potionAButton.setInteractive();
    potionAButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2', {
        potionType: PotionType.COMMON,
      });
    });
    Phaser.Display.Align.In.TopLeft(potionAButton, background, -20, -60);

    let commonBrewCoin = this.add.sprite(0, 0, 'coin');
    commonBrewCoin.setOrigin(0, 0);
    commonBrewCoin.setDisplaySize(152, 356);
    commonBrewCoin.setScale(0.5);
    Phaser.Display.Align.In.TopLeft(commonBrewCoin, background, -80, -68);

    const STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;

    let priceBrewCommon = this.add.text(
      0,
      0,
      `${STATIC_DATA.potion.type.common.gameDesign.costToBrew}`,
      {
        fontSize: '40px',
        color: '#26150E',
        fontFamily: 'Courier New',
        strokeThickness: 2,
        stroke: '#26150E',
      }
    );
    Phaser.Display.Align.In.TopRight(priceBrewCommon, background, -20, -60);

    // -------------------- factory upgrade ----------------------

    let factoryUpgradeButton = this.add.sprite(0, 0, 'upgrade-button');
    factoryUpgradeButton.setOrigin(0, 0);
    factoryUpgradeButton.setDisplaySize(48, 48);
    factoryUpgradeButton.setScale(0.5);
    factoryUpgradeButton.setInteractive();
    factoryUpgradeButton.on('pointerdown', () => {
      const levelUPText = this.add.text(0, 0, 'Level UP', {
        fontSize: '36px',
        color: '#ff0000',
        fontFamily: 'Courier New',
      });
      Phaser.Display.Align.In.TopCenter(levelUPText, background, 0, -20);
    });
    Phaser.Display.Align.In.TopLeft(factoryUpgradeButton, background, -10, -10);

    // -------------------- potion UNCOMMON button ----------------------

    let potionBButton = this.add.sprite(0, 0, 'potionB-button');
    potionBButton.setOrigin(0, 0);
    potionBButton.setDisplaySize(200, 356);
    potionBButton.setScale(0.1);
    potionBButton.setInteractive();
    potionBButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2', {
        potionType: PotionType.UNCOMMON,
      });
    });
    Phaser.Display.Align.In.TopLeft(potionBButton, background, -20, -130);

    let uncommonBrewCoin = this.add.sprite(0, 0, 'coin');
    uncommonBrewCoin.setOrigin(0, 0);
    uncommonBrewCoin.setDisplaySize(152, 356);
    uncommonBrewCoin.setScale(0.5);
    Phaser.Display.Align.In.TopLeft(uncommonBrewCoin, background, -80, -138);

    let pricePotionB = this.add.text(
      0,
      0,
      `${STATIC_DATA.potion.type.uncommon.gameDesign.costToBrew}`,
      {
        fontSize: '40px',
        color: '#26150E',
        fontFamily: 'Courier New',
        strokeThickness: 2,
        stroke: '#26150E',
      }
    );
    Phaser.Display.Align.In.TopRight(pricePotionB, background, -20, -130);

    // -------------------- potion RARE button ----------------------

    let potionCButton = this.add.sprite(0, 0, 'potionC-button');
    potionCButton.setOrigin(0, 0);
    potionCButton.setDisplaySize(200, 356);
    potionCButton.setScale(0.1);
    potionCButton.setInteractive();
    potionCButton.on('pointerdown', () => {
      this.scene.start('FactoryMenuHudScene2', {
        potionType: PotionType.RARE,
      });
    });
    Phaser.Display.Align.In.TopLeft(potionCButton, background, -20, -200);

    let rareBrewCoin = this.add.sprite(0, 0, 'coin');
    rareBrewCoin.setOrigin(0, 0);
    rareBrewCoin.setDisplaySize(152, 356);
    rareBrewCoin.setScale(0.5);
    Phaser.Display.Align.In.TopLeft(rareBrewCoin, background, -80, -208);

    let pricePotionC = this.add.text(
      0,
      0,
      `${STATIC_DATA.potion.type.rare.gameDesign.costToBrew}`,
      {
        fontSize: '40px',
        color: '#26150E',
        fontFamily: 'Courier New',
        strokeThickness: 2,
        stroke: '#26150E',
      }
    );
    Phaser.Display.Align.In.TopRight(pricePotionC, background, -20, -200);

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
