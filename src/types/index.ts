export type NutritionItem<
  T extends string = string,
  P extends string = string
> = {
  [key in T]: P;
};

export interface IDrinkData<
  T extends string = string,
  P extends string = string
> {
  image: string;
  nutritionItems: NutritionItem<T, P>[];
}
