import React from "react";

import { useAtom } from "jotai";
import { activeThemeAtom } from "../../helpers/jotai/atomsWithStorage";

// import { styles } from "./switchStyles";
import "./switch.css";

interface Props {
  value: boolean;
  onValueChange: () => void;
}

const Switch = (props: Props) => {
  const [activeTheme, ] = useAtom(activeThemeAtom);

  const handleClick = () => {
    props.onValueChange(!props.value);
  }

  return (
    <>
      <div className="MaterialSwitch">
        <input
          id="MaterialSwitch"
          name="MaterialSwitch"
          type="checkbox"
          onClick={handleClick}
          value={props.value}
        />
        <label
          htmlFor="MaterialSwitch"
          style={{
            '--active-background': activeTheme.active,
            '--inactive-background': activeTheme.inactive,
          }}
        />
      </div>
    </>
  );
}

export default Switch;
