import * as Phaser from 'phaser';
import { ShopInitData } from './shop-interface';
import { SHOP_PUB_EVENTS } from './shop-pubsub-events';

export class Shop extends Phaser.GameObjects.Sprite {
  private currentScene: Phaser.Scene;

  constructor(scene: Phaser.Scene, initData: ShopInitData) {
    super(scene, initData.x, initData.y, initData.texture);
    this.currentScene = scene;
    this.currentScene.add.existing(this);
    this.setInteractive();
    this.setOrigin(0.5, 1);
    this.setScale(0.65);
    this.postFX.addShine(1.5, 0.2, 5);

    this.on('pointerdown', this.onPointerDown, this);
    this.on('pointerup', this.onPointerUp, this);
    this.on('pointerover', this.onPointerHover, this);
    this.on('pointerout', this.onPointerOut, this);
  }

  private onPointerDown() {
    this.currentScene.events.emit(SHOP_PUB_EVENTS.SHOP_DISPLAY_HUD);
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
