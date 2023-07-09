import * as Phaser from 'phaser';
import { calculateBatchPotion } from '../../../../../game-rules/brew-batch-potion-utils';
import { CoinButton } from '../../../../components/coin-button';
import { TextCoin } from '../../../../components/coin-text';
import { Slider } from '../../../../components/slider';
import { GameStaticData } from '../../../../interfaces/game-static-data';
import {
  Common,
  Rare,
  Uncommon,
} from '../../../../interfaces/potion-static-data';
import { PotionType } from '../../../potions/potion-interface';
import { FactoryWizardValues } from '../factory-interface';
import { FACTORY_PUB_EVENTS } from './factory-hud-pubsub-events';

export interface SceneInitProps {
  potionType: PotionType;
  waterValue: number;
  herbValue: number;
  bottleValue: number;
  potionCost: number;
}
export class FactoryMenuHudScene3 extends Phaser.Scene {
  private makeLoteButton: CoinButton;
  private potionStaticData: Common | Uncommon | Rare;
  private brewQuantity: number;
  private potionType: PotionType;
  private waterValue: number;
  private herbValue: number;
  private bottleValue: number;
  private potionCost: number;

  constructor() {
    super({ key: 'FactoryMenuHudScene3' });
  }

  init(data: SceneInitProps) {
    const { potionType, waterValue, herbValue, bottleValue, potionCost } = data;

    const STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;

    this.potionStaticData = STATIC_DATA.potion.type[potionType];

    this.waterValue = waterValue;
    this.herbValue = herbValue;
    this.bottleValue = bottleValue;
    this.potionCost = potionCost;
    this.potionType = potionType;
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

    // ------------ pot chosen + unit cost ------------
    let potionAButton = this.add.sprite(0, 0, 'potionA-button');
    potionAButton.setOrigin(0.5, 0.5);
    potionAButton.setDisplaySize(200, 356);
    potionAButton.setScale(0.1);
    Phaser.Display.Align.In.LeftCenter(potionAButton, background, 0, 0);

    let textPotionCost = new TextCoin(
      this,
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      `${this.potionCost}`
    );

    Phaser.Display.Align.In.Center(textPotionCost, background, 0, 0);

    // ------------ slider button ------------

    let sliderButton = new Slider(
      this,
      50,
      0,
      100,
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      200,
      5,
      0x175682
    );

    this.brewQuantity = sliderButton.getValue();
    sliderButton.on('changed', (value) => {
      this.brewQuantity = value;
      const batchPotion = this.calculateBatch();
      this.makeLoteButton.updateText(`${batchPotion.cost}`);
    });

    Phaser.Display.Align.In.BottomCenter(sliderButton, background, 0, -50);

    // ------------ make lote button ------------

    const batchPotion = this.calculateBatch();

    this.makeLoteButton = new CoinButton(
      this,
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      `${batchPotion.cost}`,
      () => {
        const factoryWizardValues = {
          potionType: this.potionType,
          waterValue: this.waterValue,
          herbValue: this.herbValue,
          bottleValue: this.bottleValue,
          brewQuantity: this.brewQuantity,
        } as FactoryWizardValues;

        const gameController = this.scene.get('MainScene');
        gameController.events.emit(
          FACTORY_PUB_EVENTS.FACTORY_BREWING_BATCH_POTION,
          factoryWizardValues
        );
        this.scene.stop(this);
      }
    );

    Phaser.Display.Align.In.BottomCenter(
      this.makeLoteButton,
      background,
      0,
      -5
    );
  }

  private calculateBatch() {
    const factoryWizardValues = {
      potionType: this.potionType,
      waterValue: this.waterValue,
      herbValue: this.herbValue,
      bottleValue: this.bottleValue,
      brewQuantity: this.brewQuantity,
    } as FactoryWizardValues;

    const { costToBrew } = this.potionStaticData.gameDesign;

    const batchPotion = calculateBatchPotion(
      factoryWizardValues,
      costToBrew,
      this.potionStaticData.gameDesign.ingredients
    );

    return batchPotion;
  }
}
