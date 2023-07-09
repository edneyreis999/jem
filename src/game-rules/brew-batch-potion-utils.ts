import { FactoryWizardValues } from '../core/objects/buildings/factory/factory-interface';
import { BatchPotion } from '../core/objects/potions/potion-interface';

export const calculateBatchPotion = (
  factoryWizardValues: FactoryWizardValues,
  costToBrew: number,
  unitCostOfIngredients: {
    water: number;
    herb: number;
    bottle: number;
  }
) => {
  const { potionType, waterValue, herbValue, bottleValue, brewQuantity } =
    factoryWizardValues;

  const { water, herb, bottle } = unitCostOfIngredients;

  const waterPercent = Math.min(waterValue, 100);
  const herbPercent = Math.min(herbValue, 100);
  const bottlePercent = Math.min(bottleValue, 100);

  const totalPercentage = waterPercent + herbPercent + bottlePercent;
  const adjustedWaterPercent = (waterPercent / totalPercentage) * 100;
  const adjustedHerbPercent = (herbPercent / totalPercentage) * 100;
  const adjustedBottlePercent = (bottlePercent / totalPercentage) * 100;

  const costOfIngredients =
    (water * adjustedWaterPercent +
      herb * adjustedHerbPercent +
      bottle * adjustedBottlePercent) *
    brewQuantity;

  const roundedCost = Math.ceil(costToBrew + costOfIngredients);

  const batchPotion = {
    type: potionType,
    cost: roundedCost,
    quantity: brewQuantity,
    waterPercent: adjustedWaterPercent,
    herbPercent: adjustedHerbPercent,
    bottlePercent: adjustedBottlePercent,
  } as BatchPotion;

  return batchPotion;
};
