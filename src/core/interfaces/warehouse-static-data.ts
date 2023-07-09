import { BuildingStaticData, Init } from './building-static-data';

export interface WarehouseStaticData extends BuildingStaticData {
  init: WarehouseInit;
}

export interface WarehouseInit extends Init {
  gameDesign: WarehouseGameDesign;
}
export interface WarehouseGameDesign {
  levels: Levels;
}
export interface Levels {
  '1': WarehouseLevel;
  '2': WarehouseLevel;
  '3': WarehouseLevel;
  '4': WarehouseLevel;
  '5': WarehouseLevel;
}
export interface WarehouseLevel {
  capacity: number;
  cost: number;
}
