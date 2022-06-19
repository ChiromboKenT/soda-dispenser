import React, { useContext, useEffect } from 'react';
import { GrAdd, GrSubtract } from 'react-icons/gr';
import useInput from '../../hooks/useInput';
import { ManualContext } from '../../store/context/manual-context';
import Button from '../standard-elements/button';
import InputControl from '../standard-elements/input-control';

const TargetControl = ({
  mode = 'auto',
  target,
  handleValue,
  onClickDispacth,
}: {
  target: number;
  handleValue: (value: number) => void;
  onClickDispacth?: (value: number) => void;
  mode?: 'auto' | 'manual';
}) => {
  return (
    <div className={`flex flex-col w-full p-2 ${mode === 'auto' && 'pb-10'}`}>
      <h2 className="text-purple-800 font-logo font-semibold text-center mt-5 mb-[4rem] ">
        Enter Target Volume:
      </h2>
      <div className="flex justify-center px-2">
        <InputControl value={target} setValue={handleValue} />
      </div>
      {mode === 'manual' && (
        <div className="flex mt-10  p-2 justify-center">
          <Button
            variant="primary"
            styles="mx-5"
            onClick={() => onClickDispacth && onClickDispacth(300)}
          >
            Button 1
          </Button>
          <Button
            variant="primary"
            styles="mx-5"
            onClick={() => onClickDispacth && onClickDispacth(400)}
          >
            Button 2
          </Button>
          <Button
            variant="primary"
            styles="mx-5"
            onClick={() => onClickDispacth && onClickDispacth(500)}
          >
            Button 3
          </Button>
        </div>
      )}
    </div>
  );
};

export default TargetControl;
