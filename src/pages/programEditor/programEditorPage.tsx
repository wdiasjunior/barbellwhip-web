import React, { useState, useLayoutEffect, } from "react";

import Header from "../../sharedComponents/header/header";
import Icon from "../../sharedComponents/icon";
// import Loading from "../../sharedComponents/loading/loading";

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

const ProgramEditorPage = () => {

  // const isFocused = useIsFocused();

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
  const [activeProgramName, setActiveProgramName] = useAtom(activeProgramNameAtom);

  const saveProgram = async (fileName: string, programJSON: Object) => {
    console.log("saveProgram");

    // await writeToJSON(fileName, programJSON);
    // await readDIR();
  }

  const deleteProgram = async (fileName: string, index: number) => {
    console.log("deleteProgram");

    // const fileURL = await returnFileURL(fileName);
    // await deleteJSON(fileURL);
    // await readDIR();
  }

  const readProgram = async (fileName: string) => {
    console.log("readProgram");

    // return JSON.parse(await readJSON(fileName.replace(".json", "")));
  }

  // const readDIR = async () => {
  //   console.log("readDIR");
  //
  //   // setLoading(true);
  //   // const aux = await readDirectory();
  //   // setProgramList(aux);
  //   // setLoading(false);
  // }

  const copyProgram = async (fileName: string) => {
    console.log("copyProgram");

    // const fileURL = await returnFileURL(fileName);
    // await copyJSON(fileName, fileURL);
    // await readDIR();
  }

  const importProgram = async (e) => {
    console.log("importProgram");
    // console.log("importProgram", e.target.files[0]);
    const fileReader = new FileReader();
    if(e.target && e.target.files) {
      if (e.target.files[0].name.includes(".json")) {
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          const program = JSON.parse(e.target.result);
          setProgramList(prev => [...prev, { name: program.programName + ".json", program: JSON.stringify(program) }]);
        };
      } else {
        alert(selectedLocale.programEditorPage.importErrorMessage);
      }
    }
  }
  // console.log(programList);

  const handleFabButtonClick = () => {
    console.log("handleFabButtonClick");

    // setProgramEditorMode("Create");
    // // navigation.push("StepsTabs");
    // setSelectedWeek(0);
    // setSelectedDay(0);
    // setProgramEditorData({
    //   programName: "",
    //   weightUnit: "kg",
    //   oneRMs: [],
    //   trainingProgram: [ { week: new Array(7).fill({ day:[] }) } ]
    // });
  }

  const programOptionModal = async (action) => {
    console.log("programOptionModal");

  //   const programData = await readProgram(programNameForAction.name);
  //   switch(action) {
  //     case "setActive":
  //       setActiveProgramData(programData);
  //       setProgramPageSelectedDay(0);
  //       setProgramPageSelectedWeek(0);
  //       if(activeProgramName !== programNameForAction.name) {
  //         setActiveProgramName(programNameForAction.name);
  //         setSelectedDay(0);
  //         setSelectedWeek(0);
  //       }
  //       setModalOpen(false);
  //       break;
  //     case "edit":
  //       setSelectedWeek(0);
  //       setSelectedDay(0);
  //       setProgramEditorData(programData);
  //       setModalOpen(false);
  //       setProgramEditorMode("Edit");
  //       navigation.push("StepsTabs");
  //       break;
  //     case "share":
  //       const url = await returnFileURL(programNameForAction.name);
  //       await Share.open({ url: `file://${url}` });
  //       setModalOpen(false);
  //       break;
  //     case "delete":
  //       // TODO - before deleting show message "are you sure? this action cannot be undone."
  //       // modal button options - delete and cancel
  //       await deleteProgram(programNameForAction.name);
  //       setModalOpen(false);
  //       break;
  //     case "copy":
  //       await copyProgram(programNameForAction.name);
  //       setModalOpen(false);
  //       break;
  //     default:
  //       break;
  //   }
  }

  return (
      <div style={styles(activeTheme).container}>
        <Header
          title={selectedLocale.programEditorPage.title}
          import={true}
          importProgram={importProgram}
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
                            onClick={() => { setModalOpen(true); setProgramNameForAction({name: item.name, index: index}); }}
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

          {/*<Modal
            isVisible={modalOpen}
            onClick={() => setModalOpen(false)}
            onBackdropPress={() => setModalOpen(false)}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
            animationInTiming={100}
            animationOutTiming={1}
            backdropTransitionInTiming={100}
            backdropTransitionOutTiming={1}
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
          </Modal>*/}

        </div>
      </div>
  );
}

export default ProgramEditorPage;
