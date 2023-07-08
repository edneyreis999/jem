import { FactoryStaticData } from './factory-static-data';
import { Player } from './player-static-data';
import { ShopStaticData } from './shop-static-data';
import { WarehouseStaticData } from './warehouse-static-data';

export interface GameStaticData {
  player: Player;
  factory: FactoryStaticData;
  warehouse: WarehouseStaticData;
  shop: ShopStaticData;
}
