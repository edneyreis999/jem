import * as Phaser from 'phaser';
import { CORE_SUB_EVENTS } from './core-pubsub-events';
import { GameStaticData } from './interfaces/game-static-data';
import { Factory } from './objects/buildings/factory/factory';
import { Shop } from './objects/buildings/shop/shop';
import { Warehouse } from './objects/buildings/warehouse/warehouse';
import { Player } from './objects/player/player';

export default class MainScene extends Phaser.Scene {
  private layer: Phaser.GameObjects.Container;
  private player: Player;
  private factory: Factory;
  private shop: Shop;
  private warehouse: Warehouse;
  private STATIC_DATA: GameStaticData;
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.layer = this.add.container();

    const bg = this.add.image(0, 0, 'background').setOrigin(0);
    this.layer.add(bg);

    this.STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    this.player = new Player(this, this.STATIC_DATA.player.init.properties);
    this.factory = new Factory(this, this.STATIC_DATA.factory.init.properties);
    this.shop = new Shop(this, this.STATIC_DATA.shop.init.properties);
    this.warehouse = new Warehouse(
      this,
      this.STATIC_DATA.warehouse.init.properties
    );

    // create events
    this.events.on(
      CORE_SUB_EVENTS.FACTORY_DISPLAY_HUD,
      this.displayFactoryHUD,
      this
    );
    this.events.on(CORE_SUB_EVENTS.SHOP_DISPLAY_HUD, this.displayShopHUD, this);
    this.events.on(
      CORE_SUB_EVENTS.WAREHOUSE_DISPLAY_HUD,
      this.displayWarehouseHUD,
      this
    );
  }

  displayFactoryHUD() {
    this.scene.launch('FactoryMenuHudScene');
  }
  displayShopHUD() {
    this.scene.launch('ShopMenuHudScene');
  }
  displayWarehouseHUD() {
    this.scene.launch('WarehouseMenuHudScene');
  }
}
