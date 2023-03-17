import React from "react";
// import Ionicons from "react-native-vector-icons/Ionicons";

import { useAtom } from "jotai";
import { activeThemeAtom } from "../../../../helpers/jotai/atomsWithStorage";

import styles from "./exerciseItemStyles";

// does this component even need to be in a separate file?

interface Props {
  onermOBJ: any;
  rmId: any;
  weightUnit: any;
  navigation: any;
  exerciseName: any;
  data: any;
}

const ExerciseItem = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);

  return (
    <>
      <div
        style={styles(activeTheme).item}
        onClick={() => {
          // navigation.push("ExerciseItemPage", {
          //   exerciseName: props.exerciseName,
          //   onermOBJ: props.onermOBJ,
          //   rmId: props.rmId,
          //   exerciseOBJ: props.data,
          //   weightUnit: props.weightUnit
          // });
        }}
      >
        <span style={styles(activeTheme).text1}>{props.exerciseName}</span>
        {/*{isDone && <Ionicons name="checkmark" size={30} color="#3da9db" />}*/}
      </div>
    </>
  )
}

export default ExerciseItem;
