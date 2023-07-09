export interface BatchPotion {
  type: PotionType;
  price: number;
  quantity: number;
  waterPercent: number;
  herbPercent: number;
  bottlePercent: number;
}

export enum PotionType {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
}
