import { createContext, FunctionComponent, useMemo, useReducer } from 'react';
import { ActionType, IAutoContext, IMachineState } from '../../../types';

export const AutoContext = createContext<IAutoContext | null>(null);

const initialState: IMachineState = {
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

    default:
      throw new Error(`Invalid Onboarding Action Type: ${action}`);
  }
};

const AutoContextProvider: FunctionComponent<any> = ({ children }) => {
  const [machineState, autoDispatch] = useReducer(reducer, initialState);
  const store = useMemo(
    () => ({ ...machineState, autoDispatch }),
    [machineState]
  );
  return <AutoContext.Provider value={store}>{children}</AutoContext.Provider>;
};

export default AutoContextProvider;
