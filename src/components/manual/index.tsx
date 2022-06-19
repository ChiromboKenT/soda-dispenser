import React, { useContext } from "react";
import { ManualContext } from "../../store/context/manual-context";
import PageLayout from "../page-layout";
import Card from "../standard-elements/card";
import TargetControl from "../target-controls";

const Manual = () => {
  const { manualDispatch, target, current } = useContext(ManualContext)!;

  const handleOnClickDispatch = (value: number) => {
    manualDispatch({
      type: "dispense",
      payload: Math.floor(Math.random() * 5) + value,
    });
  };
  const handleValue = (value: number) => {
    if (value) {
      manualDispatch({
        type: "input",
        payload: value,
      });
    }
  };
  const getStatus = () => {
    if (current < target) {
      return "Below Target";
    } else if (current === target) {
      return "Target Achieved";
    } else {
      return "Above Target";
    }
  };
  return (
    <PageLayout>
      <Card styles="justify-center items-center pb-10">
        <Card direction="row" styles="bg-purple-100 mx-1">
          <TargetControl
            mode="manual"
            target={target}
            handleValue={handleValue}
            onClickDispacth={handleOnClickDispatch}
          />
        </Card>

        <div className="flex w-full mt-auto">
          <Card direction="row" styles="bg-purple-300 mx-1">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Target Volume:
            </h1>
            <p className="font-xl text-center ">{`${target}ml`}</p>
          </Card>
          <Card direction="row" styles="bg-purple-300 mx-1 ">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Current Volume:
            </h1>
            <p className="font-xl">{`${current}ml`}</p>
          </Card>
        </div>
        <div className="flex w-full mt-5">
          <Card direction="row" styles="bg-purple-300 mx-1">
            <h1 className="text-purple-700 font-extrabold mr-4">
              Remaining Volume:
            </h1>
            <p className="font-xl text-center ">
              {target - current < 0 ? 0 : target - current}ml
            </p>
          </Card>
          <Card direction="row" styles="bg-purple-300 mx-1 ">
            <h1 className="text-purple-700 font-extrabold mr-4">Status:</h1>
            <p className="font-xl"> {getStatus()}</p>
          </Card>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Manual;
