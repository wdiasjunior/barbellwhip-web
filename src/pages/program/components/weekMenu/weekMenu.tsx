import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../../../helpers/jotai/atomsWithStorage";
import { rmReviewPageAtom } from "../../../../helpers/jotai/navigationDataAtoms";

import styles from "./weekMenuStyles.tsx";
import "./weekMenu";

interface Props {
  // menu: Array;
  isOpen: boolean
  closeMenu: () => void;
  data: any;
  selectedWeek: number;
  selectWeek: () => void;
}

const WeekMenu = (props: Props) => {

  const navigate = useNavigate();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [, setRmReviewPageData] = useAtom(rmReviewPageAtom);

  const [isHover, setIsHover] = useState({ isHover: false, index: 0 });
  const handleMouseEnter = (index: any) => {
    setIsHover({ isHover: true, index: index });
  }
  const handleMouseLeave = (index: any) => {
    setIsHover({ isHover: false, index: index });
  }

  const handleClickRMReview = () => {
    navigate("/rmReviewPage");
    setRmReviewPageData({ oneRMs: props.data.oneRMs, weightUnit: props.data.weightUnit })
  }

  const selectWeek = (index) => {
    props.selectWeek(index);
  }

  return (
    <>
      {props.isOpen &&
        <>
          <div style={styles(activeTheme).container} className={"WeekMenu"}>
            <div style={styles(activeTheme).rmReviewContainer} className={"WeekMenu_RMReviewContainer"}>
              <div style={styles(activeTheme).item} className={"WeekMenu_RMReviewWrapper"} onClick={handleClickRMReview}>
                <span style={styles(activeTheme).RMReview} className={"WeekMenu_RMReviewText"}>{selectedLocale.programPage.rmReviewTitle}</span>
              </div>
            </div>

            <div style={styles(activeTheme).weekSelectorContainer} className={"WeekMenu_WeekList"}>
              <span style={styles(activeTheme).titleWeekDrawer}>{selectedLocale.programPage.weekSelectorTitle}</span>
              <div>
                {props.data?.trainingProgram?.map((item, index) => {
                  return (
                    <div
                      className={"WeekMenu_Item"}
                      style={styles(activeTheme, isHover, index, props.selectedWeek).drawerItem}
                      onClick={() => selectWeek(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      key={"WeekMenu_Item" + index}
                    >
                      <span className={"WeekMenu_ItemText"} style={styles(activeTheme, isHover, index, props.selectedWeek).drawerText}>
                        {selectedLocale.programPage.week} {index + 1}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="WeekMenu_Backdrop" style={styles(activeTheme).backdrop} onClick={() => props.closeMenu()}></div>
        </>
      }
    </>
  );
}

export default WeekMenu;
