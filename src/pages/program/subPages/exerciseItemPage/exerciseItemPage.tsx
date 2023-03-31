import React, { useLayoutEffect, } from "react";

import Header from "../../../../sharedComponents/header/header";

import styles from "./exerciseItemPageStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { exerciseItemPageAtom } from "../../../../helpers/jotai/exerciseItemPageAtom";

interface Props {
  exerciseName: any; // use this for the header
  onermOBJ: any;
  rmId: any;
  exerciseOBJ: any;
  weightUnit: any;
}

const ExerciseItemPage = (props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [exerciseItem, ] = useAtom(exerciseItemPageAtom);

  const setsList = exerciseItem.exerciseOBJ.set;
  const onermOBJ = exerciseItem.onermOBJ;
  const rmId = exerciseItem.rmId;
  const weightUnit = exerciseItem.weightUnit;
  const weightRoundingFactor = weightUnit === "kg" ? 2.5 : 5;
  const oneRMweight = onermOBJ?.find((el) => el.id === rmId) ?? 0;
  console.log(exerciseItem.exerciseName);


  return (
    <div className="ProgramPage_ExerciseItemPage_Container" style={styles(activeTheme).container}>
      <Header
        title={exerciseItem.exerciseName}
        menu={false}
        backButton={true}
        goBackTo="/"
      />
      <div className="ProgramPage_ExerciseItemPage_SetList" style={styles(activeTheme).setList}>
        {setsList.map((item, index) => {
          return (
            <div
              key={item.exerciseName + index}
              style={styles(activeTheme).setListItem}
              className="ProgramPage_ExerciseItemPage_SetList_Item"
            >

              {item.exerciseName ? <span style={styles(activeTheme).title} className="ProgramPage_ExerciseItemPage_SetList_ItemTitle">{item.exerciseName}</span> : null}

              {item.sets || item.reps ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  {item.sets ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.sets}:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.sets}</span></span> : null}
                  {item.reps ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.reps}:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.reps}</span></span> : null}
                </div>
              ) : null}

              {item.percentage ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  {item.percentage ?
                    <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">
                      {selectedLocale.programPage.exerciseInfo.weightLabel}:  <span style={styles(activeTheme).weightText}>{Math.ceil((parseFloat(oneRMweight?.weight) * (parseFloat(item.percentage) / 100) / weightRoundingFactor)) * weightRoundingFactor}{weightUnit}</span>
                    </span>
                    :
                    null
                  }
                  {item.percentage ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.percentage}:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.percentage}%</span></span> : null}
                </div>
              ) : null }

              {item.rpe || item.tempo ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  {item.rpe ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">RPE:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.rpe}</span></span> : null}
                  {item.tempo ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">Tempo:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.tempo}</span></span> : null}
                </div>
              ) : null}

              {item.rest ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  {item.rest ? <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.rest}:  <span style={styles(activeTheme).data} className="ProgramPage_ExerciseItemPage_SetList_ItemData">{item.rest}</span></span> : null}
                </div>
              ) : null}

              {item.altExercise1 ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.altExercise1}:  <span style={styles(activeTheme).description}>{item.altExercise1}</span></span>
                </div>
              ) : null}

              {item.altExercise2 ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.altExercise2}:  <span style={styles(activeTheme).description}>{item.altExercise2}</span></span>
                </div>
              ) : null}

              {item.description ? (
                <div style={styles(activeTheme).setListItemRow} className="ProgramPage_ExerciseItemPage_SetList_ItemRow">
                  <span style={styles(activeTheme).label} className="ProgramPage_ExerciseItemPage_SetList_ItemLabel">{selectedLocale.programPage.exerciseInfo.description}:  <span style={styles(activeTheme).description}>{item.description}</span></span>
                </div>
              ) : null}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExerciseItemPage;
