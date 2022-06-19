import React from 'react';
import { NutritionItem } from '../../types';

const NutritionInfoBar = ({
  nutritionItems,
}: {
  nutritionItems: NutritionItem<
    'mass' | 'name' | 'percentage' | 'bgColor' | 'border'
  >[];
}) => {
  return (
    <div className="flex w-full justify-evenly mt-10 p-2 ">
      {nutritionItems.map((nutritionItem, index) => (
        <div
          className="flex bg-transparent px-4  max-h-80"
          key={`nutrition-item-${index}`}
        >
          <div
            className={`${nutritionItem.bgColor} flex flex-1 my-3  shadow-md rounded-l-lg `}
          >
            <div className=" p-2 border-white border-[1px] border-l-0  border-y-0">
              <p className="text-center font-roboto text-xs">
                {nutritionItem.name}
              </p>
            </div>
            <div className=" p-2 border-white border-l-0 border-[1px]  border-y-0">
              <p className="text-center font-roboto text-xs">
                {nutritionItem.percentage}
              </p>
            </div>
          </div>
          <div
            className={`bg-white min-w-[3.8rem] flex items-center p-2 max-h-full justify-center
           flex-shrink-0 flex-grow-0 flex-basis-[30%] border-[5px] shadow-xl rounded-xl ${nutritionItem.border}`}
          >
            <p className="text-center font-roboto font-bold text-sm">
              {nutritionItem.mass}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NutritionInfoBar;
