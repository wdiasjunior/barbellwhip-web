import React, { useState, useEffect, useLayoutEffect, } from "react";

import styles from "./prTrackerPageStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../helpers/jotai/atomsWithStorage";

const PRTrackerPage = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  return (
    <View style={styles(activeTheme).container}>
      <View style={styles(activeTheme).content}>
        <Text style={styles(activeTheme).title}>PR Tracker Page</Text>
        <Text style={styles(activeTheme).subtitle}>Display some fancy graphs/charts</Text>
      </View>
    </View>
  );
}

export default PRTrackerPage;
