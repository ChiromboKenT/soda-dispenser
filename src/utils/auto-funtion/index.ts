import { useCallback, useMemo } from 'react';

export const automode = (value: number) => {
  const returnValue = useMemo(() => {
    const mins = [300, 400, 500];
    const max = [305, 405, 405];
    if (value < 300) return false;
    else {
      if (value % 300 === 0 || value % 400 === 0 || value % 400 === 0) {
        return true;
      } else if (value % 305 === 0 || value % 405 === 0 || value % 405 === 0) {
        return true;
      } else {
        let valid = false;
        let dataValue = value;
        while (dataValue >= 0) {
          if (dataValue >= 500) {
            if (dataValue >= 500 && dataValue <= 505) {
              valid = true;
            }
            dataValue = dataValue % 500;
          } else if (dataValue >= 400) {
            if (dataValue >= 400 && dataValue <= 405) {
              valid = true;
            }
            dataValue = dataValue % 500;
          } else if (dataValue >= 300) {
            if (dataValue >= 300 && dataValue <= 305) {
              valid = true;
            }
            dataValue = dataValue % 500;
            if (dataValue === 0) valid = true;
            dataValue = dataValue % 300;
          } else {
            if (dataValue === 0) {
              valid = true;
            } else {
              dataValue = -1;
            }
          }
        }
      }
    }
  }, [value]);
  return returnValue;
};
