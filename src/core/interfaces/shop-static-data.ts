import { BuildingStaticData, Init } from './building-static-data';

export interface ShopStaticData extends BuildingStaticData {
  init: ShopInit;
}

export interface ShopInit extends Init {
  gameDesign: ShopGameDesign;
}
export interface ShopGameDesign {
  levels: Levels;
}
export interface Levels {
  '1': ShopLevel;
  '2': ShopLevel;
  '3': ShopLevel;
  '4': ShopLevel;
  '5': ShopLevel;
}
export interface ShopLevel {
  capacity: number;
  cost: number;
}
