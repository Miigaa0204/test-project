import { useState } from "react";
import { Button } from "./ui/button";

const Test = () => {
  const [visible, setVisible] = useState(false);

  {
    visible == true && console.log("true");
  }

  // TERNARY
  {
    visible ? "" : "";
  }

  // {visible ? "visible ni true baina" : "visible ni false baina"}

  const [user, setUser] = useState(false);
 

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 ">
        <Button
          className="text-green-500 bg-transparent border-none"
          onClick={() => setUser(true )}
        >
          User section
        </Button>
        <Button
          onClick={() => setUser(false)}
          className="text-green-500 bg-transparent"
        >
          Order history
        </Button>
      </div>
      <div className="flex">
        <div>{user ?  test() : "orderhistory"}</div>
      </div>
    </div>
  );
};

const test = ()=> {
  return (
    <div>
      user
    </div>
  )
}

export default Test;
