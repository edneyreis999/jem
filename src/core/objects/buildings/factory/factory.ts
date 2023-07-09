import { Building } from '../building';
import { FactoryInitData } from './factory-interface';
import { FACTORY_PUB_EVENTS } from './factory-pubsub-events';

import * as Phaser from 'phaser';

export class Factory extends Building {
  constructor(scene: Phaser.Scene, initData: FactoryInitData) {
    super(scene, initData);
    this.postFX.addShine(1, 0.2, 5);
  }

  protected onPointerDown() {
    super.onPointerDown();
    this.currentScene.events.emit(FACTORY_PUB_EVENTS.FACTORY_DISPLAY_HUD);
  }
}
