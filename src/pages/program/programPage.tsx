import React, { useRef, useState, useLayoutEffect, } from "react";

import Header from "../../sharedComponents/header/header";
import TopTabBar from "../../sharedComponents/topTabBar/topTabBar";
// import Loading from "../../sharedComponents/loading/loading";
import ExerciseItem from "./components/exerciseItem/exerciseItem";
import WeekMenu from "./components/weekMenu/weekMenu";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, activeProgramAtom, programPageSelectedDayAtom, programPageSelectedWeekAtom } from "../../helpers/jotai/atomsWithStorage";

import { useInitialRender } from "../../helpers/useInitialRender";

import "./programPage";
import styles from "./programPageStyles";

import defaultProgramData from "../../db/programs/strengthV4.json";

interface Props {
  setNavBarOpen: () => void;
}

const ProgramPage = (props: Props) => {

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [activeProgramData, setActiveProgramData] = useAtom(activeProgramAtom);
  // const data = activeProgramData.trainingProgram ? activeProgramData : defaultProgramData; // TODO - change this so it doesn't break depending on the program that's loaded
  // const data = activeProgramData;
  const data = defaultProgramData; // TODO - remove this

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  }

  const [selectedDay, setSelectedDay] = useAtom(programPageSelectedDayAtom);
  const [selectedWeek, setSelectedWeek] = useAtom(programPageSelectedWeekAtom);

  const selectDay = (day) => {
    setSelectedDay(day);
  }
  const selectWeek = (index) => {
    if(selectedWeek != index) {
      setSelectedDay(0);
    }
    setSelectedWeek(index);
    setIsMenuOpen(!isMenuOpen);
    // navigation.setOptions({ headerTitle: () =>
    //               <Header
    //                 title={data !== undefined ? data?.programName + " - " + selectedLocale.programPage.week + " " + (index + 1) : selectedLocale.programPage.defaultTitle}
    //                 isMenuOpen={isMenuOpen}
    //                 setIsMenuOpen={setIsMenuOpen}
    //                 menu={data !== undefined}
    //               />
    //           });
  }

  const onScreenLoad = () => {
    // navigation.setOptions({ headerTitle: () =>
    //               <Header
    //                 title={data !== undefined ? data?.programName + " - " + selectedLocale.programPage.week + " " + (selectedWeek + 1) : selectedLocale.programPage.defaultTitle}
    //                 isMenuOpen={isMenuOpen}
    //                 setIsMenuOpen={setIsMenuOpen}
    //                 menu={data !== undefined}
    //               />
    //           });
  }

  useLayoutEffect(() => {
    onScreenLoad();
  }, [])

  useLayoutEffect(() => {
    onScreenLoad();
  }, [activeProgramData])

  // if(isInitialRender) {
  //   console.log(isInitialRender);
  //
  //   return <Loading />;
  //   // return null;
  // }


// Header   menu={data?.programName}

  return (
    <div className="ProgramPage_Container" style={styles(activeTheme).container}>
      <Header
        title={data?.programName ? data?.programName + " - " + selectedLocale.programPage.week + " " + (selectedWeek + 1) : selectedLocale.programPage.defaultTitle}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menu={true}
        backButton={false}
        setNavBarOpen={props.setNavBarOpen}
      />
      {data?.programName ? (
        <>
          <WeekMenu
            isOpen={isMenuOpen}
            closeMenu={closeMenu}
            selectWeek={selectWeek}
            selectedWeek={selectedWeek}
            data={data}
          />

          <TopTabBar
            setFirstTab={selectedWeek}
            selectDay={setSelectedDay}
            days={data?.trainingProgram[selectedWeek]?.week?.length}
            isProgramPage={true}
          />

          <div className="ProgramPage_ExerciseList" style={styles(activeTheme).exerciseList}>
            {data?.trainingProgram[selectedWeek]?.week[selectedDay]?.day.map((item, index) => {
              return (
                <div key={"ProgramPage_ExerciseItem_Week" + selectWeek + "_Day" + selectedDay + "_Index" + index}>
                  <ExerciseItem
                    onermOBJ={data?.oneRMs}
                    rmId={item.RMid}
                    weightUnit={data.weightUnit}
                    exerciseName={item.exerciseName}
                    data={item}
                  />
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className="ProgramPage_NoActiveProgramContainer" style={styles(activeTheme).noActiveProgramTextContainer}>
          <span className="ProgramPage_NoActiveProgramTextTitle" style={styles(activeTheme).noActiveProgramTextTitle}>
            {selectedLocale.programPage.noActiveProgramTextTitle}
          </span>
          <span className="ProgramPage_NoActiveProgramTextSubtitle" style={styles(activeTheme).noActiveProgramTextSubtitle}>
            {selectedLocale.programPage.noActiveProgramTextSubtitle}
          </span>
        </div>
      )}
    </div>
  );
}

export default ProgramPage;
// export default React.memo(ProgramPage);
