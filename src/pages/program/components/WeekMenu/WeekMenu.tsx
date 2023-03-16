import React from "react";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import styles from "./NavBarStyles.tsx";

const WeekMenu = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  let weekList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // delete this mock array

  return (
    <>
      <aside style={styles(activeTheme).container} className={"WeekMenu"}>
        <nav style={styles(activeTheme).wrapper} className={"WeekMenu_Wrapper"}>
          <h2 style={styles(activeTheme).rmReview}>{selectedLocale.programPage.rmReviewTitle}</h2>
          <h2 style={styles(activeTheme).listTitle}>{selectedLocale.programPage.weekSelectorTitle}</h2>
          <ul style={styles(activeTheme).list} className={"WeekMenu_WeekList"}>
            {weekList.map((item, index) => {
              return (
                <li style={styles(activeTheme).item} className={"WeekMenu_WeekItem"}>
                  {selectedLocale.programPage.week} {index + 1}
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default WeekMenu;
