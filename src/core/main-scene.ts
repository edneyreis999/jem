import * as Phaser from 'phaser';
import { CORE_SUB_EVENTS } from './core-pubsub-events';
import { Factory } from './objects/buildings/factory/factory';
import { Player } from './objects/player/player';
import { GameStaticData } from './static-data/game-static-data';

export default class MainScene extends Phaser.Scene {
  private player: Player;
  private factory: Factory;
  private STATIC_DATA: GameStaticData;
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    this.player = new Player(this, this.STATIC_DATA.player.init.properties);
    this.factory = new Factory(this, this.STATIC_DATA.factory.init.properties);

    // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

    // create events
    this.events.on(
      CORE_SUB_EVENTS.FACTORY_DISPLAY_HUD,
      this.displayFactoryHUD,
      this
    );
  }

  displayFactoryHUD() {
    this.scene.launch('Menu1HudScene');
  }
}
