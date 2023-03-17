import React, { useState, useEffect, useRef } from "react";

import styles from "./topTabBarStyles";
import "./topTabBar.css";

import { useAtom } from "jotai";
import { programPageSelectedDayAtom } from "../../helpers/jotai/atomsWithStorage";
import { activeThemeAtom, selectedLocaleAtom } from "../../helpers/jotai/atomsWithStorage";

interface Props {
  days: number;
  selectDay(): any;
  setFirstTab(): any;
  isProgramPage: boolean;
}

const TopTabBar = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [selectedDay, setSelectedDay] = useAtom(programPageSelectedDayAtom);

  const days = Array.from(Array(props.days).keys());

  // const [scrollToIndex, setScrollToIndex] = useState(0);
  // const [dataSourceCords, setDataSourceCords] = useState([]);
  const ref = useRef();
  const [selected, setSelected] = useState(0);
  const selectTab = (index) => {
    setSelected(index);
    props.selectDay(index);
    // if(ref.current != null) {
    //   ref.current.scrollTo({x: dataSourceCords[index - 2], y: 0, animated: true});
    // }
  }

  useEffect(() => {
    if(props.isProgramPage) {
      setSelected(0);
      props.selectDay(0);
      // if(ref.current != null) {
      //   ref.current.scrollTo({x: dataSourceCords[0 - 1], y: 0, animated: true});
      // }
    }
  }, [props.setFirstTab])

  useEffect(() => {
    setSelected(!props.isProgramPage ? 0 : selectedDay);
    props.selectDay(!props.isProgramPage ? 0 : selectedDay);
    // if(ref.current != null) {
    //   ref.current.scrollTo({x: dataSourceCords[0 - 1], y: 0, animated: true});
    // }
  }, [])

  useEffect(() => {
    if(props.isProgramPage) {
      selectTab(selectedDay);
    }
  }, [selectedDay])

  // const scrollToTabOnLoad = () => {
  //   if(ref.current != null && props.isProgramPage) {
  //     ref.current.scrollTo({x: dataSourceCords[selectedDay - 2], y: 0, animated: true});
  //   }
  // }

// scrollview div scroll onContentSizeChange={scrollToTabOnLoad}

// tabItem onLayout={(event) => {
//   const layout = event.nativeEvent.layout;
//   dataSourceCords[index] = layout.x;
//   setDataSourceCords(dataSourceCords);
// }}
  return (
    <>
      <div className="TopTabBar_Container" style={styles(activeTheme).container}>
        <div className="TopTabBar_Wrapper" style={styles(activeTheme).wrapper} ref={ref}>
          {days.map((item, index) => {
            return (
              <div
                key={index}
                className="TopTabBar_Item"
                style={(index == selected) ? styles(activeTheme).tabItemSelected : styles(activeTheme).tabItem}
                onClick={() => selectTab(index)}
              >
                <span style={(index === selected) ? styles(activeTheme).textSelected : styles(activeTheme).text} className="TopTabBar_ItemText" >
                  {selectedLocale.programPage.day} {index + 1}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default TopTabBar;
