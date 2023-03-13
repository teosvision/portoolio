import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWarpper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((item, index) => (
        <div className="w-28 h-28" key={item.name}>
          <BallCanvas icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWarpper(Tech, "");
