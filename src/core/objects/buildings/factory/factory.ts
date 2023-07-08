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
    this.setOrigin(0.5, 0.5);
    this.setScale(0.65);
    this.postFX.addShine(1, 0.2, 5);

    this.on('pointerdown', this.onPointerDown, this);
    this.on('pointerup', this.onPointerUp, this);
    this.on('pointerover', this.onPointerHover, this);
    this.on('pointerout', this.onPointerOut, this);
  }

  private onPointerDown() {
    this.currentScene.events.emit(FACTORY_PUB_EVENTS.FACTORY_DISPLAY_HUD);
    this.setTint(0xff0000);
  }

  private onPointerUp() {
    this.clearTint();
  }

  private onPointerHover(){
    this.setScale(1);
  }

  private onPointerOut(){
    this.setScale(0.65);
  }
}
