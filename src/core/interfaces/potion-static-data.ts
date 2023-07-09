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
  gameDesign: GameDesign;
}

export interface Uncommon {
  properties: Properties;
  gameDesign: GameDesign;
}

export interface Rare {
  properties: Properties;
  gameDesign: GameDesign;
}

export interface Properties {
  texture: string;
}

export interface GameDesign {
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
