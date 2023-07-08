import { Factory } from './factory-static-data';
import { Player } from './player-static-data';

export interface GameStaticData {
  player: Player;
  factory: Factory;
}
