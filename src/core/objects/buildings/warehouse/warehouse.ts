import { WarehouseInitData } from './warehouse-interface';

export class Warehouse {
  private currentScene: Phaser.Scene;

  constructor(scene: Phaser.Scene, initData: WarehouseInitData) {
    this.currentScene = scene;
  }
}
