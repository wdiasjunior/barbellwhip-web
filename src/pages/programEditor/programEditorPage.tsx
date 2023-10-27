import React, { useState, useLayoutEffect, } from "react";

import Header from "../../sharedComponents/header/header";
import Modal from "../../sharedComponents/modal/modal";
import Icon from "../../sharedComponents/icon";
// import Loading from "../../sharedComponents/loading/loading";

import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";
import {
  activeThemeAtom,
  selectedLocaleAtom,
  activeProgramAtom,
  activeProgramNameAtom,
  programPageSelectedDayAtom,
  programPageSelectedWeekAtom,
} from "../../helpers/jotai/atomsWithStorage";
import {
  programEditorDataAtom,
  selectedWeekAtom,
  selectedDayAtom,
  programEditorModeAtom,
  programListAtom,
} from "../../helpers/jotai/programEditorAtoms";
import { useInitialRender } from "../../helpers/useInitialRender";

import styles from "./programEditorPageStyles";

interface Props {
  setNavBarOpen: () => void;
}

const ProgramEditorPage = (props: Props) => {

  // const isFocused = useIsFocused();
  const navigate = useNavigate();

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [activeProgramData, setActiveProgramData] = useAtom(activeProgramAtom);
  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [programList, setProgramList] = useAtom(programListAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(selectedWeekAtom);
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const [programEditorMode, setProgramEditorMode] = useAtom(programEditorModeAtom);
  const [programPageSelectedDay, setProgramPageSelectedDay] = useAtom(programPageSelectedDayAtom);
  const [programPageSelectedWeek, setProgramPageSelectedWeek] = useAtom(programPageSelectedWeekAtom);

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFabButton, setShowFabButton] = useState(true);
  const [programNameForAction, setProgramNameForAction] = useState("");
  const [programIndexForAction, setProgramIndexForAction] = useState(0);
  const [activeProgramName, setActiveProgramName] = useAtom(activeProgramNameAtom);

  const saveProgram = (fileName: string, programJSON: Object) => {
    const _programJSON = JSON.stringify(programJSON);
    setProgramList(prev => [...prev, { name: fileName + ".json", program: _programJSON }]);
  }

  const deleteProgram = () => {
    setProgramList(prev => prev.filter((el) => el.name !== programNameForAction.name));
  }

  const readProgram = () => {
    return JSON.parse(programList[programIndexForAction].program);
  }

  const copyProgram = (fileName: string) => {
    const programCopy = programList[programIndexForAction];
    const programName = programCopy.name.replace(".json", " - copy.json");
    setProgramList(prev => [...prev, { name: programName, program: programCopy.program }]);
  }

  const importProgram = (e) => {
    // console.log("importProgram", e.target.files[0]);
    const fileReader = new FileReader();
    if(e.target && e.target.files) {
      if(e.target.files[0].name.includes(".json")) {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          const program = JSON.parse(e.target.result);
          // setProgramList(prev => [...prev, { name: program.programName + ".json", program: JSON.stringify(program) }]);
          if(programList.some(p => p.name === program.programName + ".json")) {
            let foundProgram = false;
            let _programVersion = 2;
            let _programName = program.programName + " " + _programVersion;
            while(!foundProgram) {
              if(programList.some(p => p.name === _programName + ".json")) {
                _programVersion++;
                _programName = program.programName + " " + _programVersion;
              } else {
                _programName = program.programName + " " + _programVersion;
                saveProgram(_programName, program);
                foundProgram = true;
              }
            }
          } else {
            saveProgram(program.programName, program);
            foundProgram = true;
          }
        };
      } else {
        alert(selectedLocale.programEditorPage.importErrorMessage);
      }
    }
  }

  const handleFabButtonClick = () => {
    setProgramEditorMode("Create");
    setSelectedWeek(0);
    setSelectedDay(0);
    setProgramEditorData({
      programName: "",
      weightUnit: "kg",
      oneRMs: [],
      trainingProgram: [ { week: new Array(7).fill({ day:[] }) } ]
    });
    navigate("/step1");
  }

  const programOptionModal = async (action) => {
    // console.log("programOptionModal", action);
    const programData = readProgram(programNameForAction.name);
    // console.log(programData);
    switch(action) {
      case "setActive":
        setActiveProgramData(programData);
        setProgramPageSelectedDay(0);
        setProgramPageSelectedWeek(0);
        if(activeProgramName !== programNameForAction.name) {
          setActiveProgramName(programNameForAction.name);
          setSelectedDay(0);
          setSelectedWeek(0);
        }
        setModalOpen(false);
        break;
      case "edit":
        setSelectedWeek(0);
        setSelectedDay(0);
        setProgramEditorData(programData);
        setModalOpen(false);
        setProgramEditorMode("Edit");
        navigate("/step1");
        break;
      case "share":
        alert("TODO");
        // const url = returnFileURL(programNameForAction.name);
        // Share.open({ url: `file://${url}` });
        setModalOpen(false);
        break;
      case "delete":
        // TODO - before deleting show message "are you sure? this action cannot be undone."
        // modal button options - delete and cancel
        deleteProgram();
        setModalOpen(false);
        break;
      case "copy":
        copyProgram(programNameForAction.name);
        setModalOpen(false);
        break;
      default:
        break;
    }
  }

  return (
      <div style={styles(activeTheme).container}>
        <Header
          title={selectedLocale.programEditorPage.title}
          import={true}
          importProgram={importProgram}
          setNavBarOpen={props.setNavBarOpen}
        />

        {showFabButton &&
          <div onClick={handleFabButtonClick} style={styles(activeTheme).FabButton}>
            <span style={styles(activeTheme).FabButtonText}>+</span>
          </div>
        }

        <div style={styles(activeTheme).wrapper}>
          {loading ? (
            <>
              {/*<Loading />*/}
            </>
          ) : (
            <div style={styles(activeTheme).programList}>
              {programList?.length > 0 ? (
                <div style={styles(activeTheme).programListWrapper}>
                  {programList?.map((item, index) => {
                    if(item.name.includes(".json")) {
                      return (
                        <div
                          style={activeProgramName === item.name ? styles(activeTheme).programItemSelected : styles(activeTheme).programItem}
                          key={"ProgramEditorPage_ProgramListItem" + index}
                        >
                          <span style={styles(activeTheme).programItemText}>{item.name.replace(".json", "")}</span>
                          <div
                            style={styles(activeTheme).iconRight}
                            onClick={() => {
                              setModalOpen(true);
                              setProgramNameForAction({name: item.name, index: index});
                              setProgramIndexForAction(index);
                            }}
                          >
                            <Icon
                              name="ellipsis-vertical"
                              size={24}
                              style={styles(activeTheme).iconRight}
                            />
                          </div>
                        </div>
                      )
                    }
                  })}
                </div>
              ) : (
                <div style={styles(activeTheme).noProgramListTextContainer}>
                  <span style={styles(activeTheme).noProgramListText}>
                    {selectedLocale.programEditorPage.noProgramListTextTitle}
                  </span>
                  <span style={styles(activeTheme).noProgramListText}>
                    {selectedLocale.programEditorPage.noProgramListTextSubtitle}
                  </span>
                </div>
              )}
            </div>
          )}

          <Modal
            isVisible={modalOpen}
            onBackdropPress={() => setModalOpen(false)}
          >
            <div style={styles(activeTheme).modalContent}>
              <div style={styles(activeTheme).modalItem} onClick={() => programOptionModal("setActive")}>
                <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.modal.setActive}</span>
              </div>

              <div style={styles(activeTheme).modalItem} onClick={() => programOptionModal("edit")}>
                <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.modal.edit}</span>
              </div>

              <div style={styles(activeTheme).modalItem} onClick={() => programOptionModal("share")}>
                <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.modal.share}</span>
              </div>

              <div style={styles(activeTheme).modalItem} onClick={() => programOptionModal("copy")}>
                <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.modal.makeCopy}</span>
              </div>

              <div style={styles(activeTheme).modalItem} onClick={() => programOptionModal("delete")}>
                <span style={styles(activeTheme).modalItemText}>{selectedLocale.programEditorPage.modal.delete}</span>
              </div>
            </div>
          </Modal>

        </div>
      </div>
  );
}

export default ProgramEditorPage;
