import { useState } from 'react';

const useInput = (validateValue: (enteredValue: number) => {}) => {
  const [enteredValue, setEnteredValue] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);

  const valueChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event: any) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue(0);
    setIsTouched(false);
  };

  const hasError = !valueIsValid && isTouched;

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    valueIsValid,
    isTouched,
    reset,
  };
};

export default useInput;
