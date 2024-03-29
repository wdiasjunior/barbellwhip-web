import React from "react";

import styles from "./loadingStyles";

import { useAtom } from "jotai";
import { activeThemeAtom } from "../../helpers/jotai/atomsWithStorage";

const Loading = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);

  return (
    <div style={styles(activeTheme).container}>
      <ActivityIndicator size="large" color={activeTheme.textFaded} />
    </div>
  );
}

export default Loading;
