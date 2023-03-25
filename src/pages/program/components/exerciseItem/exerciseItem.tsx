import React from "react";
// import Ionicons from "react-native-vector-icons/Ionicons";

import { Link, } from "react-router-dom";

import { useAtom } from "jotai";
import { activeThemeAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { exerciseItemPageAtom } from "../../../../helpers/jotai/exerciseItemPageAtom";

import styles from "./exerciseItemStyles";

// does this component even need to be in a separate file?

interface Props {
  onermOBJ: any;
  rmId: any;
  weightUnit: any;
  navigation: any;
  exerciseName: any;
  exerciseItem: any;
}

const ExerciseItem = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [exerciseItem, setExerciseItem] = useAtom(exerciseItemPageAtom);

  return (
    <>
      <Link
        to="/exerciseItemPage"
        style={styles(activeTheme).item}
        onClick={() => {
          setExerciseItem({
            exerciseName: props.exerciseName,
            weightUnit: props.weightUnit,
            exerciseOBJ: props.exerciseItem,
            onermOBJ: props.onermOBJ,
            rmId: props.rmId,
          });
        }}
      >
        <span style={styles(activeTheme).text1}>{props.exerciseName}</span>
        {/*{isDone && <Ionicons name="checkmark" size={30} color="#3da9db" />}*/}
      </Link>
    </>
  )
}

export default ExerciseItem;
