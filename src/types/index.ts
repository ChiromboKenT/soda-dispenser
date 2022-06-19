import { Dispatch } from 'react';

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

/**
 * Context Types
 */
export type ActionType =
  | { type: 'add' }
  | { type: 'subtract' }
  | { type: 'input'; payload: number }
  | { type: 'dispense'; payload: number };

export interface IMachineState {
  target: number;
  current: number;
}

export interface IAutoContext extends IMachineState {
  autoDispatch: Dispatch<ActionType>;
}

export interface IManualContext extends IMachineState {
  manualDispatch: Dispatch<ActionType>;
}
