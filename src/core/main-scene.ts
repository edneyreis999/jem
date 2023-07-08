import * as Phaser from 'phaser';
import { CORE_SUB_EVENTS } from './core-pubsub-events';
import { Factory } from './objects/buildings/factory/factory';
import { Player } from './objects/player/player';
import { GameStaticData } from './static-data/game-static-data';
import GameScene from './game-scene';

export default class MainScene extends Phaser.Scene {
  private layer: Phaser.GameObjects.Container;
  private gameScene: GameScene;
  private player: Player;
  private factory: Factory;
  private STATIC_DATA: GameStaticData;
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.layer = this.add.container();

    const bg = this.add.image(0, 0, 'background');
    this.layer.add(bg);

    this.scene.launch('GameScene');

    this.gameScene = this.scene.get('GameScene') as GameScene;


    // Phaser.Display.Align.In.Center(bg, this.add.zone(400, 300, 800, 600));

    // this.STATIC_DATA = this.cache.json.get(
    //   'game-static-data'
    // ) as GameStaticData;
    // this.player = new Player(this, this.STATIC_DATA.player.init.properties);
    // this.factory = new Factory(this, this.STATIC_DATA.factory.init.properties);


    // // create events
    // this.events.on(
    //   CORE_SUB_EVENTS.FACTORY_DISPLAY_HUD,
    //   this.displayFactoryHUD,
    //   this
    // );
  }

  updateCamera ()
  {
      const width = this.scale.gameSize.width;
      const height = this.scale.gameSize.height;

      const camera = this.cameras.main;

      camera.setViewport(0, 0, width, height);

      this.layer.setPosition(width / 2, height / 2);
      this.layer.setScale(this.gameScene.getZoom());

  }

  resize ()
    {
        this.updateCamera();
    }

  displayFactoryHUD() {
    this.scene.launch('Menu1HudScene');
  }
}
