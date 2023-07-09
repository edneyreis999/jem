export enum FACTORY_SUB_EVENTS {
  /**
   * @from: 'Factory',
   * @to: 'FactoryHUDScene',
   * @description: 'Used to display factory HUD',
   */
  FACTORY_DISPLAY_HUD = 'factory.display.hud',
}

export enum FACTORY_PUB_EVENTS {
  /**
   * @from: 'Factory',
   * @to: 'GameController',
   * @description: 'Used to tell to GameController that factory is ready to make potion',
   */
  FACTORY_BREWING_BATCH_POTION = 'brewing.a.batch.of.potion',
}
