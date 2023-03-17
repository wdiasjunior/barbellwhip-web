import React, { useLayoutEffect, } from "react";

import Header from "../../../../sharedComponents/header/header";

import styles from "./exerciseItemPageStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";

// interface Props {
//   exerciseName: any;
//   onermOBJ: any;
//   rmId: any;
//   exerciseOBJ: any;
//   weightUnit: any;
// }

const ExerciseItemPage = (props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const onScreenLoad = () => {
    // navigation.setOptions({ headerTitle: () =>
    //               <Header
    //                 title={props.route.params.exerciseName}
    //                 backButton={true}
    //               />
    //           });
  }

  useLayoutEffect(() => {
    onScreenLoad();
  }, [])

  const setsList = props?.route?.params?.exerciseOBJ?.set;
  const onermOBJ = props?.route?.params?.onermOBJ;
  const rmId = props?.route?.params?.rmId;
  const weightUnit = props?.route?.params?.weightUnit;
  const weightRoundingFactor = weightUnit === "kg" ? 2.5 : 5;
  const oneRMweight = onermOBJ?.find((el) => el.id === rmId) ?? 0; // check this

  return (
    <div style={styles(activeTheme).container} overScrollMode="never">
      <div style={styles(activeTheme).setList}>
        {setsList.map((item, index) => {
          return (
            <>
              <div key={item.exerciseName + index} style={styles(activeTheme).setListItem}>

                {item.exerciseName ? <span style={styles(activeTheme).title}>{item.exerciseName}</span> : null}

                {item.sets || item.reps ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    {item.sets ? <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.sets}:  <span style={styles(activeTheme).data}>{item.sets}</span></span> : null}
                    {item.reps ? <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.reps}:  <span style={styles(activeTheme).data}>{item.reps}</span></span> : null}
                  </div>
                ) : null}

                {item.percentage ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    {item.percentage ?
                      <span style={styles(activeTheme).label}>
                        {selectedLocale.programPage.exerciseInfo.weightLabel}:  <span style={styles(activeTheme).weightText}>{Math.ceil((parseFloat(oneRMweight?.weight) * (parseFloat(item.percentage) / 100) / weightRoundingFactor)) * weightRoundingFactor}{weightUnit}</span>
                      </span>
                      :
                      null
                    }
                    {item.percentage ? <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.percentage}:  <span style={styles(activeTheme).data}>{item.percentage}%</span></span> : null}
                  </div>
                ) : null }

                {item.rpe || item.tempo ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    {item.rpe ? <span style={styles(activeTheme).label}>RPE:  <span style={styles(activeTheme).data}>{item.rpe}</span></span> : null}
                    {item.tempo ? <span style={styles(activeTheme).label}>Tempo:  <span style={styles(activeTheme).data}>{item.tempo}</span></span> : null}
                  </div>
                ) : null}

                {item.rest ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    {item.rest ? <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.rest}:  <span style={styles(activeTheme).data}>{item.rest}</span></span> : null}
                  </div>
                ) : null}

                {item.altExercise1 ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.altExercise1}:  <span style={styles(activeTheme).description}>{item.altExercise1}</span></span>
                  </div>
                ) : null}

                {item.altExercise2 ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.altExercise2}:  <span style={styles(activeTheme).description}>{item.altExercise2}</span></span>
                  </div>
                ) : null}

                {item.description ? (
                  <div style={styles(activeTheme).setListItemRow}>
                    <span style={styles(activeTheme).label}>{selectedLocale.programPage.exerciseInfo.description}:  <span style={styles(activeTheme).description}>{item.description}</span></span>
                  </div>
                ) : null}

              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ExerciseItemPage;
