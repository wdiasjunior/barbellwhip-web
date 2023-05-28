import React, { useState, useRef, useCallback, } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const duplicateWeek = (e, index) => {
    e.stopPropagation();
    let auxAtom = deepClone(programEditorData);
    let weekToDuplicate = programEditorData.trainingProgram[index];
    auxAtom.trainingProgram.splice(index + 1, 0, weekToDuplicate);
    setProgramEditorData(auxAtom);
    selectWeek(index + 1)
  }

  const reorder = (result) => {
    if(!result.destination) {
      return;
    }
    if(result.destination.index === result.source.index) {
      return;
    }

    const from = result.source.index;
    const to = result.destination.index;

    let auxAtom = deepClone(programEditorData);

    const data = auxAtom.trainingProgram;
    const [removed] = data.splice(from, 1);
    data.splice(to, 0, removed);

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

  const renderWeekItem = useCallback((item, index) => {

    const deleteWeek = (e) => {
      e.stopPropagation();
      if(programEditorData.trainingProgram.length > 1) {
        let auxAtom = deepClone(programEditorData);
        auxAtom.trainingProgram.splice(index, 1);
        setProgramEditorData(auxAtom);
        if(selectedWeek === programEditorData.trainingProgram.length - 1) {
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
        <div style={{width: 32, height: 30, cursor: "pointer"}}>
          <Icon name="reorder-three-outline" size={30} style={styles(activeTheme).weekItemIcon} />
        </div>
        <span style={(selectedWeek == index) ? styles(activeTheme).weekSelectedItemText : styles(activeTheme).weekItemText}>{selectedLocale.programEditorPage.programEditorStep2.week} {index + 1}</span>

        <div style={styles(activeTheme).weekItemIconContainer} onClick={(e) => duplicateWeek(e, index)} >
          <Icon name="copy-outline" size={20} style={styles(activeTheme).weekItemIcon} />
        </div>

        <div style={styles(activeTheme).weekItemIconContainer}  onClick={(e) => deleteWeek(e)} >
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
          <DragDropContext onDragEnd={reorder}>
            <Droppable droppableId="weekList">
              {(provided, snapshot) => (
                <div
                  className="weekListContainer"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {programEditorData.trainingProgram.map((item, index) => (
                    <Draggable
                      key={"renderWeekItem" + index}
                      draggableId={"renderWeekItem" + index}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {renderWeekItem(item, index)}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div onClick={addWeek} style={styles(activeTheme).AddWeekButton}>
            <span style={styles(activeTheme).AddWeekButtonText}>{selectedLocale.programEditorPage.programEditorStep2.addWeekButton}</span>
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

export default StepTwo;
