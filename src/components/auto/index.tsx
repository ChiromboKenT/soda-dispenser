import React from 'react';
import PageLayout from '../page-layout';
import Card from '../standard-elements/card';
import TargetControl from '../target-controls';

const Auto = () => {
  return (
    <PageLayout>
      <Card styles="justify-center items-center pb-10">
        <Card direction="row" styles="bg-purple-100 mx-1">
          <TargetControl />
        </Card>

        <div className="flex w-full mt-auto">
          <Card direction="row" styles="bg-purple-200 mx-1">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Target Volume:
            </h1>
            <p className="font-xl text-center ">400ml</p>
          </Card>
          <Card direction="row" styles="bg-purple-200 mx-1 ">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Current Volume:
            </h1>
            <p className="font-xl">400ml</p>
          </Card>
        </div>
        <div className="flex w-full mt-5">
          <Card direction="row" styles="bg-purple-200 mx-1">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Remaining Volume:
            </h1>
            <p className="font-xl text-center ">400ml</p>
          </Card>
          <Card direction="row" styles="bg-purple-200 mx-1 ">
            <h1 className="text-purple-700 font-extrabold mr-4">Status:</h1>
            <p className="font-xl"> Below Target</p>
          </Card>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Auto;
