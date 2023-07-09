export enum CORE_PUB_EVENTS {}
export enum CORE_SUB_EVENTS {
  /**
   * @from: 'Factory',
   * @to: 'MainScene',
   * @description: 'Used to display factory HUD',
   */
  FACTORY_DISPLAY_HUD = 'factory.display.hud',
  SHOP_DISPLAY_HUD = 'shop.display.hud',
  WAREHOUSE_DISPLAY_HUD = 'warehouse.display.hud',

  FACTORY_BREWING_BATCH_POTION = 'brewing.a.batch.of.potion',
}
