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
  const data = activeProgramData;

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
  const selectWeek = ({ index }) => {
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

  // const MenuWeekList = () => (
  //   <div style={styles(activeTheme).containerDrawer}>
  //
  //     <div style={styles(activeTheme).rmInputContainer}>
  //       <div
  //         style={styles(activeTheme).item}
  //         onClick={() => {
  //           setIsMenuOpen(!isMenuOpen);
  //           navigation.push("RMReviewPage", {onermOBJ: data?.oneRMs, weightUnit: data?.weightUnit});
  //         }}
  //       >
  //         <span style={styles(activeTheme).RMReview}>{selectedLocale.programPage.rmReviewTitle}</span>
  //       </div>
  //     </div>
  //
  //     <div style={styles(activeTheme).weekSelectorContainer}>
  //       <span style={styles(activeTheme).titleWeekDrawer}>{selectedLocale.programPage.weekSelectorTitle}</span>
  //       <div persistentScrollbar={true} overScrollMode="never">
  //         {data?.trainingProgram?.map((item, index) => {
  //           return (
  //             <div key={index}
  //               style={(index == selectedWeek) ? styles(activeTheme).drawerItemSelected : styles(activeTheme).drawerItem}
  //               onClick={() => selectWeek({index})}
  //             >
  //               <span style={(index == selectedWeek) ? styles(activeTheme).drawerTextSelected : styles(activeTheme).drawerText}>
  //                 {selectedLocale.programPage.week} {JSON.stringify(index + 1)}
  //               </span>
  //             </div>
  //           )
  //         })}
  //       </div>
  //     </div>
  //
  //   </div>
  // );
  // const menuWeekList = <MenuWeekList />

  const flatListRenderItem = ({ item }) => (
    <ExerciseItem
      onermOBJ={data?.oneRMs}
      rmId={item.RMid}
      weightUnit={data.weightUnit}
      navigation={navigation}
      exerciseName={item.exerciseName}
      data={item}
    />
  );

  // if(isInitialRender) {
  //   console.log(isInitialRender);
  //
  //   return <Loading />;
  //   // return null;
  // }


// Header   menu={data?.programName}

// WeekMenu   menu={menuWeekList}
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
        />
          {/*<div className="ProgramPage_Container2" style={styles(activeTheme).wrapper}>*/}

            {/*<TopTabBar
              setFirstTab={selectedWeek}
              selectDay={setSelectedDay}
              days={data?.trainingProgram[selectedWeek]?.week?.length}
              isProgramPage={true}
            />*/}

            {/*<FlatList
              data={data?.trainingProgram[selectedWeek]?.week[selectedDay]?.day}
              renderItem={flatListRenderItem}
              keyExtractor={(item, index) => item.exerciseName + "" + index}
            />*/}

          {/*</div>*/}
        {/*</WeekMenu>*/}
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
