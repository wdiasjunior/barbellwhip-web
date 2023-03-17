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
  const ref = useRef({});
  const [selected, setSelected] = useState(0);
  const selectTab = (index) => {
    setSelected(index);
    props.selectDay(index);
    // if(ref.current != null) {
    //   ref.current.scrollTo({x: dataSourceCords[index - 2], y: 0, animated: true});
    // }
    if(ref[index] != null) {
      // console.log("should scroll ref", ref);

      ref[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  useEffect(() => {
    if(props.isProgramPage) {
      setSelected(0);
      props.selectDay(0);
      if(ref[0] != null) {
        ref[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
      }
    }
  }, [props.setFirstTab])

  useEffect(() => {
    setSelected(!props.isProgramPage ? 0 : selectedDay);
    props.selectDay(!props.isProgramPage ? 0 : selectedDay);
    if(ref[0] != null) {
      ref[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
    }
  }, [])

  useEffect(() => {
    if(props.isProgramPage) {
      selectTab(selectedDay);
    }
  }, [selectedDay])

  const scrollToTabOnLoad = () => {
    if(ref[0] != null && props.isProgramPage) {
      ref[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
    }
  }

  return (
    <>
      <div className="TopTabBar_Container" style={styles(activeTheme).container}>
        <div className="TopTabBar_Wrapper" style={styles(activeTheme).wrapper}>
          {days.map((item, index) => {
            return (
              <div
                ref={el => ref[index] = el}
                key={"TopTabBar_Item" + index}
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
