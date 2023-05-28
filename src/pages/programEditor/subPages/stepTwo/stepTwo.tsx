import React, { useState, useRef, useCallback, } from "react";

import { useAtom } from "jotai";
import { programEditorDataAtom, selectedWeekAtom, programEditorModeAtom } from "../../../../helpers/jotai/programEditorAtoms";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { useInitialRender } from "../../../../helpers/useInitialRender";

import { deepClone } from "../../../../helpers/deepClone";

import Header from "../../../../sharedComponents/header/header";
import Icon from "../../../../sharedComponents/icon";
// import Loading from "../../../../sharedComponents/loading/loading";

import styles from "./stepTwoStyles";

const StepTwo = () => {

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [programEditorMode, ] = useAtom(programEditorModeAtom);
  const weekRef = useRef(null);

  const addWeek = () => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.trainingProgram.push({ week: new Array(7).fill({ day:[] }) });
    setProgramEditorData(auxAtom);
  }

  const selectWeek = (index) => {
    setSelectedWeek(index);
  }

  const duplicateWeek = (index) => {
    let auxAtom = deepClone(programEditorData);
    let weekToDuplicate = programEditorData.trainingProgram[index];
    auxAtom.trainingProgram.splice(index + 1, 0, weekToDuplicate);
    setProgramEditorData(auxAtom);
    selectWeek(index + 1)
  }

  const reorder = (data, from, to) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.trainingProgram = data;
    setProgramEditorData(auxAtom);
    if(selectedWeek == from) {
      selectWeek(to);
    } else if(selectedWeek < from && selectedWeek >= to) {
      selectWeek(selectedWeek + 1);
    } else if(selectedWeek > from && selectedWeek <= to) {
      selectWeek(selectedWeek - 1);
    }
  }

  const renderWeekItem = useCallback(({item, index, drag}) => {

    const deleteWeek = () => {
      if(programEditorData.trainingProgram.length > 1) {
        let auxAtom = deepClone(programEditorData);
        auxAtom.trainingProgram.splice(index, 1);
        setProgramEditorData(auxAtom);
        if(selectedWeek === programEditorData.trainingProgram.length) {
          selectWeek(selectedWeek - 1);
        } else if(selectedWeek === index || selectedWeek > index) {
          selectWeek(index);
        }
      }
    }

    return (
      <div
        style={selectedWeek == index ? styles(activeTheme).weekItemSelected : styles(activeTheme).weekItem}
        onClick={() => selectWeek(index)}
      >
        <div style={{width: 32, height: 30, cursor: "pointer"}} onLongPress={drag} delayLongPress={50}>
          <Icon name="reorder-three-outline" size={30} style={styles(activeTheme).weekItemIcon} />
        </div>
        <span style={(selectedWeek == index) ? styles(activeTheme).weekSelectedItemText : styles(activeTheme).weekItemText}>{selectedLocale.programEditorPage.programEditorStep2.week} {index + 1}</span>

        <div style={styles(activeTheme).weekItemIconContainer} >
          <Icon onClick={() => duplicateWeek(index)} name="copy-outline" size={20} style={styles(activeTheme).weekItemIcon} />
        </div>

        <div style={styles(activeTheme).weekItemIconContainer}  onClick={() => deleteWeek(index)} >
          <Icon name="trash-outline" size={20} style={styles(activeTheme).weekItemIcon} />
        </div>
      </div>
    )
  }, [programEditorData.trainingProgram, addWeek, reorder, selectWeek, duplicateWeek]); // TODO - check this - not sure if this array should have all of this

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={programEditorMode === "Create" ? selectedLocale.programEditorPage.programEditorStep2.title : selectedLocale.programEditorPage.programEditorStep2.title2}
        saveButton={true}
        backButton={true}
        goBackTo={"/programEditorPage"}
      />
      {!isInitialRender ? (
        <div style={styles(activeTheme).weekList}>
          {/*<DraggableFlatList
            ref={weekRef}
            data={programEditorData.trainingProgram}
            keyExtractor={(item, index) => index}
            onDragEnd={({data, from, to}) => reorder(data, from, to)}
            renderItem={renderWeekItem}
            ListFooterComponent={() => {
              return (*/}










              <div
                style={false ? styles(activeTheme).weekItemSelected : styles(activeTheme).weekItem}
                onClick={() => selectWeek(1)}
              >
                <div style={{width: 32, height: 30, cursor: "pointer"}}>
                  <Icon name="reorder-three-outline" size={30} style={styles(activeTheme).weekItemIcon} />
                </div>
                <span style={(false) ? styles(activeTheme).weekSelectedItemText : styles(activeTheme).weekItemText}>{selectedLocale.programEditorPage.programEditorStep2.week} 1</span>

                <div style={styles(activeTheme).weekItemIconContainer} >
                  <Icon onClick={() => duplicateWeek(1)} name="copy-outline" size={20} style={styles(activeTheme).weekItemIcon} />
                </div>

                <div style={styles(activeTheme).weekItemIconContainer}  onClick={() => deleteWeek(1)} >
                  <Icon name="trash-outline" size={20} style={styles(activeTheme).weekItemIcon} />
                </div>
              </div>
              <div
                style={true ? styles(activeTheme).weekItemSelected : styles(activeTheme).weekItem}
                onClick={() => selectWeek(1)}
              >
                <div style={{width: 32, height: 30, cursor: "pointer"}}>
                  <Icon name="reorder-three-outline" size={30} style={styles(activeTheme).weekItemIcon} />
                </div>
                <span style={(true) ? styles(activeTheme).weekSelectedItemText : styles(activeTheme).weekItemText}>{selectedLocale.programEditorPage.programEditorStep2.week} 2</span>

                <div style={styles(activeTheme).weekItemIconContainer} >
                  <Icon onClick={() => duplicateWeek(1)} name="copy-outline" size={20} style={styles(activeTheme).weekItemIcon} />
                </div>

                <div style={styles(activeTheme).weekItemIconContainer}  onClick={() => deleteWeek(1)} >
                  <Icon name="trash-outline" size={20} style={styles(activeTheme).weekItemIcon} />
                </div>
              </div>
















                <div onClick={addWeek} style={styles(activeTheme).AddWeekButton}>
                  <span style={styles(activeTheme).AddWeekButtonText}>{selectedLocale.programEditorPage.programEditorStep2.addWeekButton}</span>
                </div>
              {/*)
            }}
          />*/}
        </div>
      ) : (
        <>
          {/*<Loading />*/}
        </>
      )}
    </div>
  );
}

export default StepTwo;
