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

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>change state</Button>
      <div>{visible ? "visible ni true baina" : "visible ni false baina"}</div>
      {/* <div className="flex items-center">CONTENT</div> */}
    </div>
  );
};

export default Test;
