import React, { useState, useEffect, useRef } from "react";

import { useAtom } from "jotai";
import {
  programEditorDataAtom,
  selectedWeekAtom,
  selectedDayAtom,
  exerciseEditorDataAtom,
} from "../../../../../helpers/jotai/programEditorAtoms";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../../helpers/jotai/atomsWithStorage";
import { useInitialRender } from "../../../../../helpers/useInitialRender";

import Header from "../../../../../sharedComponents/header/header";
import Icon from "../../../../../sharedComponents/icon";
// import Loading from "../../../../../sharedComponents/loading/loading";

import { deepClone } from "../../../../../helpers/deepClone";

import styles from "./exerciseEditorPageStyles";

const ExerciseEditorPage = () => {

  const isInitialRender = useInitialRender();

  // TODO - add "discard" icon to header ?

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [exerciseEditorData, ] = useAtom(exerciseEditorDataAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);

  const exerciseIndex = exerciseEditorData.exerciseIndex;
  const length = programEditorData.trainingProgram[selectedWeek].week[selectedDay].day.length - 1;
  const exerciseData = exerciseIndex === "add" ? deepClone(programEditorData.trainingProgram[selectedWeek].week[selectedDay].day[length]) : deepClone(programEditorData.trainingProgram[selectedWeek].week[selectedDay].day[exerciseIndex]);
  const exerciseType = exerciseEditorData.exerciseType;
  const oneRMweight = programEditorData.oneRMs.find((el) => el.id === exerciseData.RMid); // TODO - check this - should probably just use the data from route.params
  const oneRMname = exerciseEditorData.oneRMname;

  const weightRoundingFactor = programEditorData.weightUnit === "kg" ? 2.5 : 5;

  const addExerciseSubSet = () => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.trainingProgram[selectedWeek].week[selectedDay].day[exerciseIndex === "add" ? length : exerciseIndex].set.push({
      exerciseName: "",
      sets: "",
      reps: "",
      percentage: "",
      rpe: "",
      tempo: "",
      rest: "",
      altExercise1: "",
      altExercise2: "",
      description: ""
    });
    setProgramEditorData(auxAtom);
  }

  const editExerciseField = (field, _e, index) => {
    const e = _e.target.value.toString();
    let auxAtom = deepClone(programEditorData);
    const auxExerciseIndex = exerciseIndex === "add" ? length : exerciseIndex;
    if(field === "parentExerciseName") {
      auxAtom.trainingProgram[selectedWeek].week[selectedDay].day[auxExerciseIndex].exerciseName = e;
    } else {
      auxAtom.trainingProgram[selectedWeek].week[selectedDay].day[auxExerciseIndex].set[index][field] = e;
    }
    setProgramEditorData(auxAtom);
  }

  const removeExerciseSubSet = (index) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.trainingProgram[selectedWeek].week[selectedDay].day[exerciseIndex === "add" ? length : exerciseIndex].set.splice(index, 1);
    setProgramEditorData(auxAtom);
  }

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={selectedLocale.programEditorPage.exerciseEditorPage.title}
        backButton={true}
        goBackTo={"/step3"}
      />
      {!isInitialRender ? (
        <div style={styles(activeTheme).wrapper}>

          <div style={styles(activeTheme).exerciseItem}>
            <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.exerciseNameInfo}</span>
            <input
              style={styles(activeTheme).input}
              onChange={(input) => editExerciseField("parentExerciseName", input)}
              disabled={oneRMname !== "" ? false : true}
              value={exerciseData?.exerciseName+""}
            />
            {oneRMweight?.weight ? <span style={styles(activeTheme).weightText}>1RM: {oneRMweight?.weight}{programEditorData.weightUnit}</span> : null}
          </div>

          <div style={styles(activeTheme).setList}>

            {exerciseData?.set.map((item, index) => {
              return (
                <div style={styles(activeTheme).exerciseItem} key={"ExerciseEditorPage_SetListExercise" + index}>

                <div style={{...styles(activeTheme).col, width: "100%"}}>
                  <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.exerciseVariation}</span>
                  <div style={styles(activeTheme).row}>
                    <input
                      style={styles(activeTheme).inputExerciseVariationName}
                      onChange={(input) => editExerciseField("exerciseName", input, index)}
                      value={item.exerciseName+""}
                    />
                    <div style={styles(activeTheme).exerciseItemRemoveIconContainer} onClick={() => removeExerciseSubSet(index)}>
                      <Icon name="trash-outline" size={25} style={styles(activeTheme).exerciseItemRemoveIcon} />
                    </div>
                  </div>
                </div>

                  <div style={styles(activeTheme).row}>
                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.sets}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("sets", input, index)}
                        value={item.sets+""}
                      />
                    </div>

                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.reps}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("reps", input, index)}
                        value={item.reps+""}
                      />
                    </div>
                  </div>

                  <div style={styles(activeTheme).row}>
                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.percentage}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("percentage", input, index)}
                        value={item.percentage+""}
                      />
                    </div>
                    <div style={styles(activeTheme).colWeight}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.weightLabel}</span>
                      <span style={styles(activeTheme).weightText}>
                        {isNaN(oneRMweight?.weight * item.percentage / 100) ? "" :
                          Math.ceil((oneRMweight?.weight * (item.percentage / 100) / weightRoundingFactor)) * weightRoundingFactor } {!isNaN(oneRMweight?.weight * item.percentage / 100) ? programEditorData.weightUnit : "0 " + programEditorData.weightUnit}
                      </span>
                    </div>
                  </div>

                  <div style={styles(activeTheme).row}>
                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>RPE</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("rpe", input, index)}
                        value={item.rpe+""}
                      />
                    </div>

                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>Tempo</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("tempo", input, index)}
                        value={item.tempo+""}
                      />
                    </div>
                  </div>

                  <div style={styles(activeTheme).row}>
                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.rest}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("rest", input, index)}
                        value={item.rest+""}
                      />
                    </div>
                  </div>

                  <div style={styles(activeTheme).row}>
                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.altExercise1}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("altExercise1", input, index)}
                        value={item.altExercise1+""}
                      />
                    </div>

                    <div style={styles(activeTheme).col}>
                      <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.altExercise2}</span>
                      <input
                        type="numeric"
                        style={styles(activeTheme).input}
                        onChange={(input) => editExerciseField("altExercise2", input, index)}
                        value={item.altExercise2+""}
                      />
                    </div>
                  </div>

                  <div style={{...styles(activeTheme).col, width: "100%"}}>
                    <span style={styles(activeTheme).inputLabel}>{selectedLocale.programEditorPage.exerciseEditorPage.description}</span>
                    <input
                      style={styles(activeTheme).inputDynamicHeight}
                      onChange={(input) => editExerciseField("description", input, index)}
                      value={item.description+""}
                    />
                  </div>
                </div>
              )
            })}

            <div onClick={addExerciseSubSet} style={styles(activeTheme).AddExerciseButton}>
              <span style={styles(activeTheme).AddExerciseButtonText}>{selectedLocale.programEditorPage.exerciseEditorPage.addExerciseButton}</span>
            </div>

          </div>
        </div>
      ) : (
        <>
          {/*<Loading />*/}
        </>
      )}
    </div>
  )
}

export default ExerciseEditorPage;
