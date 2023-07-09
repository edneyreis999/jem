import * as Phaser from 'phaser';
import { CORE_SUB_EVENTS } from './core-pubsub-events';
import { GameStaticData } from './interfaces/game-static-data';
import { Factory } from './objects/buildings/factory/factory';
import { Shop } from './objects/buildings/shop/shop';
import { Warehouse } from './objects/buildings/warehouse/warehouse';
import { Player } from './objects/player/player';
import { BatchPotion } from './objects/potions/potion-interface';

export default class MainScene extends Phaser.Scene {
  private STATIC_DATA: GameStaticData;
  private layer: Phaser.GameObjects.Container;
  private player: Player;
  private factory: Factory;
  private shop: Shop;
  private warehouse: Warehouse;
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.layer = this.add.container();
    this.STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;

    const bg = this.add.image(0, 0, 'background').setOrigin(0);
    this.layer.add(bg);

    this.player = new Player(this, this.STATIC_DATA.player.init.properties);
    this.factory = new Factory(this, this.STATIC_DATA.factory.init.properties);
    this.shop = new Shop(this, this.STATIC_DATA.shop.init.properties);
    this.warehouse = new Warehouse(
      this,
      this.STATIC_DATA.warehouse.init.properties
    );

    this.warehouse.init();

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

    this.events.on(
      CORE_SUB_EVENTS.FACTORY_BREWING_BATCH_POTION,
      (batch: BatchPotion) => this.brewBatchPotion(batch),
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
  brewBatchPotion(batchPotion: BatchPotion) {
    const STATIC_DATA = this.cache.json.get(
      'game-static-data'
    ) as GameStaticData;
    const potionStaticData =
      STATIC_DATA.potion.type[batchPotion.type].gameDesign;

    if (this.player.getGold() < batchPotion.cost) {
      // TODO: Display a message to the player
      return;
    }
    if (this.warehouse.getFreeSlotCount() < batchPotion.quantity) {
      // TODO: Display a message to the player
      return;
    }

    // everything is ok, brew the potion
    this.player.removeGold(batchPotion.cost);
    const quantity = batchPotion.quantity * potionStaticData.size;
    this.warehouse.addPotion(quantity);
  }
}
