import React, {
  ChangeEventHandler,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { GrSubtract, GrAdd } from 'react-icons/gr';
import { ManualContext } from '../../../store/context/manual-context';
import Button from '../button';

const InputControl = ({
  value,
  setValue,
}: {
  setValue: (value: number) => void;

  value: number;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleInput = (e: any) => {
    const { value } = e.target;
    setValue(value);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = `${value}`;
    }
  }, [value]);

  const handleAddValue = () => {
    const newValue: number =
      typeof value === 'string' ? parseInt(value) + 1 : value + 1;
    setValue(newValue);
  };

  const handleSubtractValue = () => {
    let newValue = 0;
    if (typeof value === 'string') {
      newValue = parseInt(value) > 0 ? parseInt(value) - 1 : parseInt(value);
    } else {
      newValue = value > 0 ? value - 1 : value;
    }
    setValue(newValue);
  };
  return (
    <div className="flex bg-transparent px-4  max-h-80">
      <div className={` flex flex-1 my-3   rounded-l-lg `}>
        <div className=" py-5 px-1">
          <Button variant="primary" onClick={handleSubtractValue}>
            <GrSubtract />
          </Button>
        </div>
        <div
          className={`bg-white min-w-[3.8rem] flex items-center p-2 max-h-full justify-center
           flex-shrink-0 flex-grow-0 flex-basis-[30%] border-[6px] shadow-xl rounded-xl border-purple-700`}
        >
          <input
            ref={inputRef}
            defaultValue={value}
            onChange={handleInput}
            type="number"
            className="font-logo text-xl text-purple-700 outline-0 max-w-[5rem] text-center bg-transparent border-none"
          />
        </div>
        <div className=" py-5 px-1">
          <Button variant="primary" onClick={handleAddValue}>
            <GrAdd />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InputControl;
