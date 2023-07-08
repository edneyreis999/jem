import { PlayerInitData } from './player-interface';
import { PLAYER_PUB_EVENTS } from './player-pubsub-events';

export class Player {
  private currentScene: Phaser.Scene;
  private gold: number = 0;

  constructor(scene: Phaser.Scene, initData: PlayerInitData) {
    this.currentScene = scene;
    this.addGold(initData.gold);
  }

  public getGold(): number {
    return this.gold;
  }

  public addGold(amount: number): void {
    this.gold += amount;
    this.currentScene.events.emit(
      PLAYER_PUB_EVENTS.PLAYER_UPDATE_GOLD,
      this.gold
    );
  }

  public removeGold(amount: number): void {
    this.gold -= amount;
    this.currentScene.events.emit(
      PLAYER_PUB_EVENTS.PLAYER_UPDATE_GOLD,
      this.gold
    );
  }
}
