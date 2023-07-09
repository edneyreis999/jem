import { PotionType } from '../../potions/potion-interface';
import { BuildingInitData } from '../building-interface';

export interface FactoryWizardValues {
  potionType: PotionType;
  waterValue: number;
  herbValue: number;
  bottleValue: number;
  brewQuantity: number;
}

export interface FactoryInitData extends BuildingInitData {}
