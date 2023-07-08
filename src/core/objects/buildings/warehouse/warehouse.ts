import * as Phaser from 'phaser';
import { WarehouseInitData } from './warehouse-interface';
import { WAREHOUSE_PUB_EVENTS } from './warehouse-pubsub-events';

export class Warehouse extends Phaser.GameObjects.Sprite {
  private currentScene: Phaser.Scene;

  constructor(scene: Phaser.Scene, initData: WarehouseInitData) {
    super(scene, initData.x, initData.y, initData.texture);
    this.currentScene = scene;
    this.currentScene.add.existing(this);
    this.setInteractive();
    this.setOrigin(0, 0);
    this.setScale(0.65);
    // this.setDisplaySize(332 / 1.5, 147 / 1.5);
    this.postFX.addShine(0.6, 0.5, 5);

    this.on('pointerdown', this.onPointerDown, this);
    this.on('pointerup', this.onPointerUp, this);
  }

  private onPointerDown() {
    this.currentScene.events.emit(WAREHOUSE_PUB_EVENTS.WAREHOUSE_DISPLAY_HUD);
    this.setTint(0xff0000);
  }

  private onPointerUp() {
    this.clearTint();
  }
}
