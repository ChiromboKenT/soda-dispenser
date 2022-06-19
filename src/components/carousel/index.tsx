import React, { useState } from 'react';

import { BsArrowRightSquare } from 'react-icons/bs';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { colors } from '../../theme';
import { IDrinkData } from '../../types';
import NutritionInfoBar from '../nutrition-info-bar';

const Carousel = ({ drinkData }: { drinkData: IDrinkData<any>[] }) => {
  const [active, setActive] = useState(0);

  const handleBack = () => {
    setActive((active) => {
      return active <= 0 ? active : active - 1;
    });
  };

  const handleNext = () => {
    setActive((active) => {
      return active < drinkData.length - 1 ? active + 1 : active;
    });
  };
  console.log(active);
  return (
    <div className="flex  max-w-lg relative  object-cover">
      <BsArrowLeftSquare
        size="2rem"
        onClick={handleBack}
        color={active > 0 ? colors.primary : colors.disabled}
        className={`${
          active > 0 && 'animate-pingStrong'
        } absolute z-10 cursor-pointer top-2/4   left-2`}
      />
      <div className="w-full">
        {drinkData.map((drink, index) => (
          <div className="" key={`image-slide-${index}`}>
            <img
              className={`w-full aspect-square transition-all duration-200 ${
                active === index
                  ? 'visible duration-200  opacity-100'
                  : 'hidden opacity-0 delay-100 duration-150'
              }`}
              src={drink.image}
              alt="Juice product"
            />
            {active === index && (
              <NutritionInfoBar nutritionItems={drink.nutritionItems} />
            )}
          </div>
        ))}
      </div>
      <BsArrowRightSquare
        onClick={handleNext}
        size="2rem"
        color={active < drinkData.length - 1 ? colors.primary : colors.disabled}
        className={`${
          active < drinkData.length - 1 && 'animate-pingStrong'
        } absolute z-10 cursor-pointer z top-2/4  right-2`}
      />
    </div>
  );
};

export default Carousel;
