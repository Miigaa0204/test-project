import { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const Calc = () => {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    setNumber(number + 1);
  };

  const removeNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="flex items-center">
      <Button onClick={removeNumber} disabled={number == 0}>
        <Minus />
      </Button>
      <span className="bg-green-500 text-black px-5">{number}</span>
      <Button onClick={addNumber}>
        <Plus />
      </Button>
    </div>
  );
};

export default Calc;
