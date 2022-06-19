import { createContext, FunctionComponent, useMemo, useReducer } from 'react';
import { ActionType, IManualContext, IMachineState } from '../../../types';

export const ManualContext = createContext<IManualContext | null>(null);

const initialState = {
  target: 0,
  current: 0,
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        target: state.target + 1,
      };
    case 'subtract':
      return {
        ...state,
        target: state.target > 0 ? state.target - 1 : 0,
      };
    case 'input':
      return {
        ...state,
        target: action.payload,
      };
    case 'dispense':
      console.log(action.payload);

      const value = state.current + action.payload;
      return {
        ...state,
        current: value,
      };

    default:
      throw new Error(`Invalid Onboarding Action Type: ${action}`);
  }
};

const AutoContextProvider: FunctionComponent<any> = ({ children }) => {
  const [machineState, manualDispatch] = useReducer(reducer, initialState);
  const store = useMemo(
    () => ({ ...machineState, manualDispatch }),
    [machineState]
  );
  return (
    <ManualContext.Provider value={store}>{children}</ManualContext.Provider>
  );
};

export default AutoContextProvider;
