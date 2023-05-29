import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { programEditorDataAtom, programEditorModeAtom } from "../../../../helpers/jotai/programEditorAtoms";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { useInitialRender } from "../../../../helpers/useInitialRender";

import { deepClone } from "../../../../helpers/deepClone";
import { randomUUID } from "../../../../helpers/randomUUID";

import Header from "../../../../sharedComponents/header/header";
import Switch from "../../../../sharedComponents/switch/switch";
// import Loading from "../../../../sharedComponents/loading/loading";
import Icon from "../../../../sharedComponents/icon";

import styles from "./stepOneStyles";

/*
  TODO
  custom header for this stack to control go back button?
  save icon in header?
  info icon in header open modal quick tutorial for each page?

  add 1rm -> change into add rm -> add field for reps -> add math for estimated rm if reps > 1
  if text inputs are left empty, the option in modal on stepThree is also empty. add placeholder and on user interaction delete it?

  keyboard avoiding view not working properly
*/

const StepOne = () => {

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [programEditorMode, ] = useAtom(programEditorModeAtom);
  const [weightUnit, setWeightUnit] = useState(programEditorData.weightUnit === "kg" ? false : true); // false == kg == left, true == lbs == right
  const toggleWeightUnitSwitch = () => setWeightUnit(previousState => !previousState);

  useEffect(() => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.weightUnit = weightUnit ? "lbs" : "kg";
    setProgramEditorData(auxAtom);
  }, [weightUnit])

  const editProgramName = (e) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.programName = e.target.value.toString();
    setProgramEditorData(auxAtom);
  }
  const editRMname = (e, index) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.oneRMs[index].name = e.target.value.toString();
    setProgramEditorData(auxAtom);
  }
  const editRMweight = (e, index) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.oneRMs[index].weight = e.target.value.toString();
    setProgramEditorData(auxAtom);
  }

  const add1rm = () => {
    let auxAtom = deepClone(programEditorData);
    let uuid = randomUUID();
    auxAtom.oneRMs.push({
      id: uuid,
      name: "",
      weight: ""
    });
    setProgramEditorData(auxAtom);
  }

  const remove1rm = (index) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.oneRMs.splice(index, 1);
    setProgramEditorData(auxAtom);
  }

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={programEditorMode === "Create" ? selectedLocale.programEditorPage.programEditorStep1.title : selectedLocale.programEditorPage.programEditorStep1.title2}
        saveButton={true}
        backButton={true}
        goBackTo={"/programEditorPage"}
      />
      {!isInitialRender ? (
        <div style={styles(activeTheme).listContainer}>
          <input
            placeholder={selectedLocale.programEditorPage.programEditorStep1.programName}
            style={styles(activeTheme).programNameTextInput}
            value={programEditorData.programName}
            onChange={(input) => editProgramName(input)}
          />

          <div style={styles(activeTheme).weightUnitContainer} >
            <span style={styles(activeTheme).weightUnitText}>kg</span>
            <Switch
              trackColor={{ false: activeTheme.active, true: activeTheme.active }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleWeightUnitSwitch}
              value={weightUnit}
              style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], marginTop: 10, }}
            />
            <span style={styles(activeTheme).weightUnitText}>lbs</span>
          </div>

          {programEditorData.oneRMs.map((item, index) => {
            return (
              <div style={styles(activeTheme).onermItem} key={"ProgramEditorPage_StepOne_RMItem" + index} >
                <input
                  placeholder={selectedLocale.programEditorPage.programEditorStep1.RMexercise}
                  style={styles(activeTheme).oneRMTextInput}
                  value={item.name}
                  onChange={(input) => editRMname(input, index)}
                />
                <div style={styles(activeTheme).onermItem_InputRow} >
                  <input
                    placeholder={selectedLocale.programEditorPage.programEditorStep1.weightLabel}
                    type="numeric"
                    style={styles(activeTheme).oneRMNumberInput}
                    value={item.weight+""}
                    onChange={(input) => editRMweight(input, index)}
                  />
                  <div style={styles(activeTheme).onermItemIconContainer} onClick={() => remove1rm(index)}>
                    <Icon name="trash-outline" size={30} style={styles(activeTheme).onermItemIcon} />
                  </div>
                </div>
              </div>
            )
          })}

          <div onClick={add1rm} style={styles(activeTheme).AddOneRMButton}>
            <span style={styles(activeTheme).AddOneRMButtonText}>{selectedLocale.programEditorPage.programEditorStep1.add1RMexerciseButton}</span>
          </div>

        </div>
      ) : (
        <>
          {/*<Loading />*/}
        </>
      )}
    </div>
  );
}
export default StepOne;
