import * as Phaser from 'phaser';
import { Building } from '../building';
import { ShopInitData } from './shop-interface';
import { SHOP_PUB_EVENTS } from './shop-pubsub-events';

export class Shop extends Building {
  constructor(scene: Phaser.Scene, initData: ShopInitData) {
    super(scene, initData);
    this.postFX.addShine(1.5, 0.2, 5);
    this.setOrigin(0.5, 1);
  }

  protected onPointerDown() {
    super.onPointerDown();
    this.currentScene.events.emit(SHOP_PUB_EVENTS.SHOP_DISPLAY_HUD);
  }
}
