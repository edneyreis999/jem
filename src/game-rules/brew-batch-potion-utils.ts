import { GameStaticData } from '../core/interfaces/game-static-data';
import {
  BatchPotion,
  PotionType,
} from '../core/objects/potions/potion-interface';

export const calcaulateBatchPotion = ({
  waterQuantity,
  herbQuantity,
  bottleQuantity,
  quantity,
  potionType,
}) => {
  const batchPotion = {
    type: PotionType.COMMON,
    cost: 24000,
    quantity: 58,
    waterPercent: 33,
    herbPercent: 33,
    bottlePercent: 33,
  } as BatchPotion;

  return batchPotion;
};

export const getStaticPotionFromPotionType = (
  STATIC_DATA: GameStaticData,
  potionType: PotionType
) => {
  const staticPotion = STATIC_DATA.potion.type[potionType];
  return staticPotion;
};
