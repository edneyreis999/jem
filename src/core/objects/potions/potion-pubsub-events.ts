export enum PLAYER_SUB_EVENTS {}

export enum PLAYER_PUB_EVENTS {
  /**
   * @from: 'CoreScene',
   * @to: 'HUDScene',
   * @description: 'Used to display player gold in HUD',
   */
  PLAYER_UPDATE_GOLD = "player.update.gold",
}
