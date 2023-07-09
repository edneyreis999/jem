import * as Phaser from 'phaser';
import { BuildingInitData } from './building-interface';

export abstract class Building extends Phaser.GameObjects.Sprite {
  protected currentScene: Phaser.Scene;
  protected currentLevel: number = 1;

  constructor(scene: Phaser.Scene, initData: BuildingInitData) {
    super(scene, initData.x, initData.y, initData.texture);
    this.currentScene = scene;
    this.currentScene.add.existing(this);
    this.setInteractive();
    this.setOrigin(0.5, 0.5);
    this.setScale(0.65);

    this.on('pointerdown', this.onPointerDown, this);
    this.on('pointerup', this.onPointerUp, this);
    this.on('pointerover', this.onPointerHover, this);
    this.on('pointerout', this.onPointerOut, this);
  }

  protected onPointerDown() {
    this.setTint(0xff0000);
  }

  protected onPointerUp() {
    this.clearTint();
  }

  protected onPointerHover() {
    this.setScale(1);
  }

  protected onPointerOut() {
    this.setScale(0.65);
  }

  get level() {
    return this.currentLevel;
  }

  levelUp() {
    this.currentLevel += 1;
  }
}
