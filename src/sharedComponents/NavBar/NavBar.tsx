import React from "react";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import styles from "./NavBarStyles.tsx";

const NavBar = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const handleNavigate = (_route: string) => {
    console.log(_route);
  }

  return (
    <>
      <nav style={styles(activeTheme).container} className={"NavBar"}>
        <ul style={styles(activeTheme).list} className={"NavBar_ItemList"}>
        {/*
          TODO
          revise this
          does it even need to be an ul?
          dynamic list with a map?
        */}
          <li
            style={styles(activeTheme).item}
            className={"NavBar_Item"}
            onClick={() => handleNavigate("program")}
          >
            {selectedLocale.programPage.title}
          </li>
          <li
            style={styles(activeTheme).item}
            className={"NavBar_Item"}
            onClick={() => handleNavigate("1rm calculator")}
          >
            {selectedLocale.calculatorPage.title}
          </li>
          <li
            style={styles(activeTheme).item}
            className={"NavBar_Item"}
            onClick={() => handleNavigate("plate math")}
          >
            {selectedLocale.plateMathPage.title}
          </li>
          <li
            style={styles(activeTheme).item}
            className={"NavBar_Item"}
            onClick={() => handleNavigate("program editor")}
          >
            {selectedLocale.programEditorPage.title}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
