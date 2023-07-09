export interface BatchPotion {
  type: PotionType;
  cost: number;
  brewQuantity: number;
  waterPercent: number;
  herbPercent: number;
  bottlePercent: number;
}

export enum PotionType {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
}
