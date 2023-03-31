import React, { useState, useEffect, useRef } from "react";

import styles from "./topTabBarStyles";
import "./topTabBar.css";

import { useAtom } from "jotai";
import { programPageSelectedDayAtom, activeThemeAtom, selectedLocaleAtom } from "../../helpers/jotai/atomsWithStorage";

import { useInitialRender } from "../../helpers/useInitialRender";

interface Props {
  days: number;
  selectDay(): any;
  setFirstTab(): any;
  isProgramPage: boolean;
}

const TopTabBar = (props: Props) => {

  const isInitialRender = useInitialRender();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [selectedDay, setSelectedDay] = useAtom(programPageSelectedDayAtom);

  const days = Array.from(Array(props.days).keys());

  const ref = useRef({});
  const [selected, setSelected] = useState(!props.isProgramPage ? 0 : selectedDay);
  const selectTab = (index) => {
    if(!isInitialRender) {
      setSelected(index);
      props.selectDay(index);
      if(ref[index] != null) {
        ref[index].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  useEffect(() => {
    if(props.isProgramPage && !isInitialRender) {
      setSelected(0);
      props.selectDay(0);
      if(ref[0] != null) {
        ref[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
      }
    }
  }, [props.setFirstTab])

  useEffect(() => {
    if(!isInitialRender) {
      setSelected(!props.isProgramPage ? 0 : selectedDay);
      props.selectDay(!props.isProgramPage ? 0 : selectedDay);
      if(ref[0] != null) {
        ref[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
      }
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

  if(isInitialRender) return <></>;

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
