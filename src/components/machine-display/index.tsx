import React from 'react';
import { drinkData } from '../../store/data';
import Carousel from '../carousel';

const MachineDisplay = () => {
  return (
    <div className="flex flex-col rounded-md bg-black h-full max-w-full  ">
      <Carousel drinkData={drinkData} />
    </div>
  );
};

export default MachineDisplay;
