import React, { useContext } from 'react';
import { AutoContext } from '../../store/context/auto-context';
import { automode } from '../../utils/auto-funtion';
import PageLayout from '../page-layout';
import Card from '../standard-elements/card';
import TargetControl from '../target-controls';

const Auto = () => {
  const { target, autoDispatch } = useContext(AutoContext)!;
  const handleValue = (value: number) => {
    if (value) {
      autoDispatch({
        type: 'input',
        payload: value,
      });
    }
  };
  const getStatus = () => {
    return target > 0 && automode(target) ? 'Yes' : 'No';
  };
  return (
    <PageLayout>
      <Card styles="justify-center items-center pb-10">
        <Card direction="row" styles="bg-purple-100 mx-1">
          <TargetControl target={target} handleValue={handleValue} />
        </Card>

        <div className="flex w-full mt-auto">
          <Card direction="row" styles="bg-purple-200 mx-1">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Target Volume:
            </h1>
            <p className="font-xl text-center ">{target}</p>
          </Card>
          <Card direction="row" styles="bg-purple-200 mx-1 ">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Can Fill Target:
            </h1>
            <p className="font-xl"> {getStatus()}</p>
          </Card>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Auto;
