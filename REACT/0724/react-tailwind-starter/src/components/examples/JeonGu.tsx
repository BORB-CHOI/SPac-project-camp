import { useState } from "react";

const JeonGu = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="item-middle">
      <img
        onClick={() => setIsOn((prev) => !prev)}
        src={isOn ? "./images/b_on.png" : "./images/b_off.png"}
        alt=""
      />
    </div>
  );
};
export default JeonGu;
