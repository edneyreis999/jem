import * as Phaser from 'phaser';
import { GameStaticData } from '../../../interfaces/game-static-data';
import {
  WarehouseLevel,
  WarehouseStaticData,
} from '../../../interfaces/warehouse-static-data';
import { Building } from '../building';
import { WarehouseInitData } from './warehouse-interface';
import { WAREHOUSE_PUB_EVENTS } from './warehouse-pubsub-events';

export class Warehouse extends Building {
  private ocupiedSlots: number = 0;
  private WAREHOUSE_STATIC_DATA: WarehouseStaticData;
  private CURRENT_LEVEL_STATIC_DATA: WarehouseLevel;

  constructor(scene: Phaser.Scene, initData: WarehouseInitData) {
    super(scene, initData);
    this.postFX.addShine(0.6, 0.5, 5);
    this.setOrigin(0, 0);
  }

  init() {
    const STATIC_DATA = this.currentScene.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    const { warehouse } = STATIC_DATA;
    this.WAREHOUSE_STATIC_DATA = warehouse;
    this.CURRENT_LEVEL_STATIC_DATA =
      warehouse.init.gameDesign.levels[this.level.toString()];
  }

  protected onPointerDown() {
    super.onPointerDown();
    this.currentScene.events.emit(WAREHOUSE_PUB_EVENTS.WAREHOUSE_DISPLAY_HUD);
  }

  get ocupiedSlotsCount() {
    return this.ocupiedSlots;
  }

  addPotion(quantity: number) {
    this.ocupiedSlots += quantity;
  }

  getFreeSlotCount() {
    return this.CURRENT_LEVEL_STATIC_DATA.capacity - this.ocupiedSlots;
  }

  getCapacity() {
    return this.CURRENT_LEVEL_STATIC_DATA.capacity;
  }
}
