import React from "react";

import WeightCalc from "../../utils/WeightCalc"
import Plate from "../plate/plate";

import styles from "./weightViewStyles";

interface Props {
  // weightRack: any;
  // barWeight: any;
  // weight: any;
  plates: any;
  activeTheme: any;
  weightUnit: any;
}

const WeightView = (props: Props) => {
  return (
      <div style={styles(props.activeTheme).plateWrap}>
        {
          props.plates.map((weight, index) => {
            return (
              <Plate
                weight={weight}
                key={`keyPlate${index}`}
                activeTheme={props.activeTheme}
                weightUnit={props.weightUnit}
              />
            );
        })}
      </div>
  );
}
// size={WeightCalc.getPlatePercentOfMax(weight, props.plates)}

export default WeightView;
