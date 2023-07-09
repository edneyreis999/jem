import { BuildingStaticData, Init } from './building-static-data';

export interface FactoryStaticData extends BuildingStaticData {
  init: FactoryInit;
}

export interface FactoryInit extends Init {
  gameDesign: FactoryGameDesign;
}
export interface FactoryGameDesign {
  levels: Levels;
}
export interface Levels {
  '1': FactoryLevel;
  '2': FactoryLevel;
  '3': FactoryLevel;
}
export interface FactoryLevel {
  potionAvaliable: 'commum' | 'uncommon' | 'rare'[];
  cost: number;
}
