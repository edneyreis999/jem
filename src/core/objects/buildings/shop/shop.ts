import { ShopInitData } from './shop-interface';

export class Shop {
  private currentScene: Phaser.Scene;

  constructor(scene: Phaser.Scene, initData: ShopInitData) {
    this.currentScene = scene;
  }
}
