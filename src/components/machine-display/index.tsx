import React from 'react';
import { drinkData } from '../../store/data';
import Carousel from '../carousel';
import TargetControl from '../target-controls';

const MachineDisplay = () => {
  return (
    <div className="flex flex-[0_0_55%]  flex-col rounded-md  h-full max-w-full items-center justify-center">
      <Carousel drinkData={drinkData} />
    </div>
  );
};

export default MachineDisplay;
