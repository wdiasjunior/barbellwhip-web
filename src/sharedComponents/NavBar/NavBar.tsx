import React from "react";

import { useAtom } from 'jotai';
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import styles from "./NavBarStyles.tsx";

const NavBar = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  return (
    <>
      <nav style={styles(activeTheme).container}>
        <ul>
          <li style={styles(activeTheme).navItem}>program</li>
          <li style={styles(activeTheme).navItem}>1rm calculator</li>
          <li style={styles(activeTheme).navItem}>plate math</li>
          <li style={styles(activeTheme).navItem}>program editor</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
