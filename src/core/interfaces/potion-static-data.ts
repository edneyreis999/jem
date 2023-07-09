export interface PotionStaticData {
  name: string;
  type: Type;
}

export interface Type {
  common: Common;
  uncommon: Uncommon;
  rare: Rare;
}

export interface Common {
  properties: Properties;
  gameDesign: PotionGameDesign;
}

export interface Uncommon {
  properties: Properties;
  gameDesign: PotionGameDesign;
}

export interface Rare {
  properties: Properties;
  gameDesign: PotionGameDesign;
}

export interface Properties {
  texture: string;
  herbTexture: string;
  bottleTexture: string;
}

export interface PotionGameDesign {
  ingredients: Ingredients;
  size: number;
  costToBrew: number;
  rangeToSell: RangeToSell;
  timeToBrew: number;
}

export interface Ingredients {
  water: number;
  herb: number;
  bottle: number;
}

export interface RangeToSell {
  min: number;
  max: number;
}
