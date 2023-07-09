import * as Phaser from 'phaser';
import { Building } from '../building';
import { WarehouseInitData } from './warehouse-interface';
import { WAREHOUSE_PUB_EVENTS } from './warehouse-pubsub-events';

export class Warehouse extends Building {
  constructor(scene: Phaser.Scene, initData: WarehouseInitData) {
    super(scene, initData);
    this.postFX.addShine(0.6, 0.5, 5);
    this.setOrigin(0, 0);
  }

  protected onPointerDown() {
    super.onPointerDown();
    this.currentScene.events.emit(WAREHOUSE_PUB_EVENTS.WAREHOUSE_DISPLAY_HUD);
  }
}
