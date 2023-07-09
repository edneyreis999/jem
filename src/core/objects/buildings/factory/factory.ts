import { GameStaticData } from '../../../interfaces/game-static-data';
import { BatchPotion } from '../../potions/potion-interface';
import { FactoryInitData } from './factory-interface';
import { FACTORY_PUB_EVENTS } from './factory-pubsub-events';

import * as Phaser from 'phaser';

export class Factory extends Phaser.GameObjects.Sprite {
  private currentScene: Phaser.Scene;

  constructor(scene: Phaser.Scene, initData: FactoryInitData) {
    super(scene, initData.x, initData.y, initData.texture);
    this.currentScene = scene;
    this.currentScene.add.existing(this);
    this.setInteractive();
    this.setOrigin(0, 0);
    this.setScale(0.65);
    this.postFX.addShine(1, 0.2, 5);

    this.on('pointerdown', this.onPointerDown, this);
    this.on('pointerup', this.onPointerUp, this);
  }

  private onPointerDown() {
    this.currentScene.events.emit(FACTORY_PUB_EVENTS.FACTORY_DISPLAY_HUD);
    this.setTint(0xff0000);
  }

  private onPointerUp() {
    this.clearTint();
  }

  brewBatchPotion(batchPotion: BatchPotion) {
    const STATIC_DATA = this.currentScene.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    console.log('Brewing a batch of potion', batchPotion);
  }
}
