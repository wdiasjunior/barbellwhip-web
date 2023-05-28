import React, { useState, useCallback, useRef } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";
import { programEditorDataAtom, selectedWeekAtom, selectedDayAtom, programEditorModeAtom } from "../../../../helpers/jotai/programEditorAtoms";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { useInitialRender } from "../../../../helpers/useInitialRender";

import { deepClone } from "../../../../helpers/deepClone";

import TopTabBar from "../../../../sharedComponents/topTabBar/topTabBar";
import Header from "../../../../sharedComponents/header/header";
import Modal from "../../../../sharedComponents/modal/modal";
import Icon from "../../../../sharedComponents/icon";
// import Loading from "../../../../sharedComponents/loading/loading";

import styles from "./stepThreeStyles";

const StepThree = () => {

  const navigate = useNavigate();

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const [programEditorMode, ] = useAtom(programEditorModeAtom);
  const [modalOpen, setModalOpen] = useState(false);

  const dayRef = useRef(null);
  const selectDay = (day) => {
    setSelectedDay(day);
  }

  const addExercise = (data) => {
    let auxAtom = deepClone(programEditorData);
    auxAtom.trainingProgram[selectedWeek].week[selectedDay].day.push({
      RMid: data === "simple" ? "0" : data.id,
      exerciseName: data === "simple" ? "" : data.name,
      set: [
        {
          exerciseName: "",
          sets: "",
          reps: "",
          percentage: "",
          rpe: "",
          tempo: "",
          rest: "",
          altExercise1: "",
          altExercise2: "",
          description: "",
        }
      ]
    });
    setProgramEditorData(auxAtom);

    if(data === "simple") {
      setModalOpen(false);
      navigate("ExerciseEditorPage", {
        oneRMweight: 0, // TODO - never used? check this
        exerciseIndex: "add",
      });
    } else {
      setModalOpen(false);
      navigate("ExerciseEditorPage", {
        oneRMweight: data.weight, // TODO - never used? check this
        oneRMname: data.name,
        exerciseIndex: "add",
      });
    }
  }

  const editExercise = (index) => {
    navigate("ExerciseEditorPage", {
      exerciseIndex: index,
    });
  }

  const reorder = (result) => {
    if(!result.destination) {
      return;
    }
    if(result.destination.index === result.source.index) {
      return;
    }

    let auxAtom = deepClone(programEditorData);
    const from = result.source.index;
    const to = result.destination.index;
    const data = programEditorData.trainingProgram[selectedWeek].week[selectedDay].day;
    const [removed] = data.splice(from, 1);
    data.splice(to, 0, removed);
    auxAtom.trainingProgram[selectedWeek].week[selectedDay].day = data;
    setProgramEditorData(auxAtom);
  }

  // TODO check if useCallback should be used again, since it's used in stepTwo
  const renderDayExerciseItems = useCallback((item, index) => {
  // const renderDayExerciseItems = (item, index) => {

    const deleteExercise = () => {
      let auxAtom = deepClone(programEditorData);
      auxAtom.trainingProgram[selectedWeek].week[selectedDay].day.splice(index, 1);
      setProgramEditorData(auxAtom);
    }

    return (
      <div style={styles(activeTheme).exerciseItem}>
        <div style={{width: 32, height: 30, cursor: "pointer"}}>
          <Icon name="reorder-three-outline" size={30} style={styles(activeTheme).exerciseItemIcon} />
        </div>

        <span style={styles(activeTheme).exerciseItemText}>
          {programEditorData.trainingProgram[selectedWeek].week[selectedDay].day[index]?.exerciseName}
        </span>

        <div style={{width: 32, height: 20, cursor: "pointer"}} onClick={() => editExercise(index)} >
          <Icon name="edit" size={20} style={styles(activeTheme).exerciseItemIcon} />
        </div>

        <div style={{width: 20, height: 20, cursor: "pointer"}} onClick={() => deleteExercise(index)} >
          <Icon name="trash-outline" size={20} style={styles(activeTheme).exerciseItemIcon} />
        </div>
      </div>
    )
  // }
  }, [programEditorData.trainingProgram[selectedWeek].week[selectedDay].day, addExercise, reorder, selectedDay, selectedWeek]); // not sure if this array should have all of this

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={programEditorMode === "Create" ? selectedLocale.programEditorPage.programEditorStep3.title : selectedLocale.programEditorPage.programEditorStep3.title2}
        saveButton={true}
        backButton={true}
        goBackTo={"/programEditorPage"}
      />
      <TopTabBar
        setFirstTab={selectedWeek}
        selectDay={selectDay}
        days={programEditorData.trainingProgram[selectedWeek].week.length}
        isProgramPage={false}
      />
      <div style={styles(activeTheme).wrapper}>
        {!isInitialRender ? (
          <div style={styles(activeTheme).exerciseList}>
            <DragDropContext onDragEnd={reorder}>
              <Droppable droppableId="weekList">
                {(provided, snapshot) => (
                  <div
                    className="weekListContainer"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {programEditorData.trainingProgram[selectedWeek].week[selectedDay].day.map((item, index) => (
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
                            {renderDayExerciseItems(item, index)}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {programEditorData.trainingProgram[selectedWeek].week[selectedDay].day.length === 0 &&
              <span style={styles(activeTheme).RestDayText}>{selectedLocale.programEditorPage.programEditorStep3.emptyDayInfo}</span>
            }
            <div onClick={() => setModalOpen(true)} style={styles(activeTheme).AddExerciseButton}>
              <span style={styles(activeTheme).AddExerciseButtonText}>{selectedLocale.programEditorPage.programEditorStep3.addExerciseButton}</span>
            </div>
          </div>
        ) : (
          <>
            {/*<Loading />*/}
          </>
        )}
      </div>

      <Modal
        isVisible={modalOpen}
        onBackButtonClick={() => setModalOpen(false)}
        onBackdropPress={() => setModalOpen(false)}
      >
        <div style={styles(activeTheme).modalContent}>
          {programEditorData.oneRMs.length > 0 && programEditorData.oneRMs.map((item, index) => {
            return (
              <div style={styles(activeTheme).modalItem} key={"ProgramEditorPage_StepThree_ModalItem" + index} onClick={() => addExercise(item)}>
                <span style={styles(activeTheme).modalItemText}>{item.name}</span>
              </div>
            )
          })}
          <div style={styles(activeTheme).modalItem} onClick={() => addExercise("simple")}>
            <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.programEditorStep3.simpleExerciseModalLabel}</span>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default StepThree;
