import React from 'react';
import { GrAdd, GrSubtract } from 'react-icons/gr';
import Button from '../standard-elements/button';
const TargetControl = ({ mode = 'auto' }: { mode?: 'auto' | 'manual' }) => {
  return (
    <div className={`flex flex-col w-full p-2 ${mode === 'auto' && 'pb-10'}`}>
      <h2 className="text-purple-800 font-logo font-semibold text-center mt-5 mb-[4rem] ">
        Enter Target Volume:
      </h2>
      <div className="flex justify-center px-2">
        <Button variant="outline" onClick={() => true}>
          <GrSubtract />
        </Button>
        <input
          type="number"
          className="outline-0 max-w-[15rem] flex-1 text-center mx-5 bg-transparent border-b-2 border-purple-700"
        />
        <Button variant="outline" onClick={() => true}>
          <GrAdd />
        </Button>
      </div>
      {mode === 'manual' && (
        <div className="flex mt-10  p-2 justify-center">
          <Button variant="primary" onClick={() => true}>
            Button 1
          </Button>
          <Button variant="primary" onClick={() => true}>
            Button 2
          </Button>
          <Button variant="primary" onClick={() => true}>
            Button 3
          </Button>
        </div>
      )}
    </div>
  );
};

export default TargetControl;
