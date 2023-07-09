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
export class FactoryMenuHudScene2 extends Phaser.Scene {
  private potionStaticData: Common | Uncommon | Rare;
  constructor() {
    super({ key: 'FactoryMenuHudScene2' });
  }

  init(data: SceneInitProps) {
    const { potionType } = data;
    const STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    this.potionStaticData = STATIC_DATA.potion.type[potionType];

    console.log('---- potionStaticData ----', this.potionStaticData);
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

    // ------------------ Water Assets ----------------

    let water = this.add.sprite(0, 0, 'water');
    water.setOrigin(0, 0);
    // water.setDisplaySize(25, 50);
    water.setScale(1);
    Phaser.Display.Align.In.TopLeft(water, background, -20, -40);

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

          // water price
          let waterCoin = this.add.sprite(
            0,
            0,
            'coin'
          );
          waterCoin.setOrigin(0, 0);
          waterCoin.setDisplaySize(152, 356);
          waterCoin.setScale(0.4);
          Phaser.Display.Align.In.TopRight(waterCoin, background, -15, -60);
    
    
          let waterPrice = this.add.text(0, 0, `${this.potionStaticData.gameDesign.ingredients.water}`, {
            fontSize: '20px',
            color: '#26150E',
            fontFamily: 'Courier New',
            strokeThickness: 2,
            stroke: '#26150E',
          });
          waterCoin.setOrigin(0, 0);
          Phaser.Display.Align.In.TopRight(waterPrice, background, -10, -60);
        

    // --------------- Herb Assets -------------
      // herb sprite
    
    let herb = this.add.sprite(
      0,
      0,
      this.potionStaticData.properties.herbTexture
    );
    herb.setOrigin(0, 0);
    herb.setDisplaySize(150, 170);
    herb.setScale(0.2);
    Phaser.Display.Align.In.TopLeft(herb, background, -20, -110);

       // herb slider

    let herbSliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      120,
      5,
      0x8b2947
    );
    Phaser.Display.Align.In.TopCenter(
      herbSliderBackground,
      background,
      0,
      -130
    );

    let herbSliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x8b2947
    );
    herbSliderButton.setInteractive();
    herbSliderButton.on('drag', (pointer, dragX, dragY) => {
      herbSliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 50,
        this.cameras.main.centerX + 50
      );
    });
    this.input.setDraggable(herbSliderButton);
    Phaser.Display.Align.In.TopCenter(herbSliderButton, background, 0, -120);

      // herb price
      let herbCoin = this.add.sprite(
        0,
        0,
        'coin'
      );
      herbCoin.setOrigin(0, 0);
      herbCoin.setDisplaySize(152, 356);
      herbCoin.setScale(0.4);
      Phaser.Display.Align.In.TopRight(herbCoin, background, -15, -120);


      let herbPrice = this.add.text(0, 0, `${this.potionStaticData.gameDesign.ingredients.herb}`, {
        fontSize: '20px',
        color: '#26150E',
        fontFamily: 'Courier New',
        strokeThickness: 2,
        stroke: '#26150E',
      });
      herbCoin.setOrigin(0, 0);
      Phaser.Display.Align.In.TopRight(herbPrice, background, -10, -120);

      

    // --------------- Bottle Assets -------------

      // bottle sprite

    let bottle = this.add.sprite(
      0,
      0,
      this.potionStaticData.properties.bottleTexture
    );
    bottle.setOrigin(0, 0);
    bottle.setDisplaySize(152, 356);
    bottle.setScale(0.1);
    Phaser.Display.Align.In.TopLeft(bottle, background, -25, -170);

       // bottle slider

    let bottleSliderBackground = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      120,
      5,
      0x4c8d69
    );
    Phaser.Display.Align.In.TopCenter(
      bottleSliderBackground,
      background,
      0,
      -190
    );

    let bottleSliderButton = this.add.circle(
      this.cameras.main.centerX - 50,
      this.cameras.main.centerY,
      10,
      0x4c8d69
    );
    bottleSliderButton.setInteractive();
    bottleSliderButton.on('drag', (pointer, dragX, dragY) => {
      bottleSliderButton.x = Phaser.Math.Clamp(
        dragX,
        this.cameras.main.centerX - 50,
        this.cameras.main.centerX + 50
      );
    });
    this.input.setDraggable(bottleSliderButton);
    Phaser.Display.Align.In.TopCenter(bottleSliderButton, background, 0, -180);

      // bottle price
      let bottleCoin = this.add.sprite(
        0,
        0,
        'coin'
      );
      bottleCoin.setOrigin(0, 0);
      bottleCoin.setDisplaySize(152, 356);
      bottleCoin.setScale(0.4);
      Phaser.Display.Align.In.TopRight(bottleCoin, background, -15, -180);


      let bottlePrice = this.add.text(0, 0, `${this.potionStaticData.gameDesign.ingredients.bottle}`, {
        fontSize: '20px',
        color: '#26150E',
        fontFamily: 'Courier New',
        strokeThickness: 2,
        stroke: '#26150E',
      });
      bottleCoin.setOrigin(0, 0);
      Phaser.Display.Align.In.TopRight(bottlePrice, background, -10, -180);
  
  

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
