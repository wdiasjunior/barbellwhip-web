import React from "react";

import { useAtom } from 'jotai';
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import styles from "./NavBarStyles.tsx";

const NavBar = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  return (
    <>
      <nav style={styles(activeTheme).container} className={"NavBar"}>
        <ul style={styles(activeTheme).list} className={"NavBar_ItemList"}>
          <li style={styles(activeTheme).item} className={"NavBar_Item"}>program</li>
          <li style={styles(activeTheme).item} className={"NavBar_Item"}>1rm calculator</li>
          <li style={styles(activeTheme).item} className={"NavBar_Item"}>plate math</li>
          <li style={styles(activeTheme).item} className={"NavBar_Item"}>program editor</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
