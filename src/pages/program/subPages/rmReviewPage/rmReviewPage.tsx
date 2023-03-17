import React from "react";

import styles from "./rmReviewPageStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";

interface Props {
  onermOBJ: any;
  weightUnit: any;
}

const RMReviewPage = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const onermOBJ = props.route.params.onermOBJ;
  const weightUnit = props.route.params.weightUnit;

  return (
    <div style={styles(activeTheme).container} overScrollMode="never">
      {onermOBJ?.map((item, index) => {
        return (
          <div key={index} style={styles(activeTheme).item}>
            {item.name ? <span style={styles(activeTheme).title}>{item.name}</span> : null}
            {item.weight ?
              <span style={styles(activeTheme).subTitle}>
                {selectedLocale.programPage.rmReviewWeightLable}: <span style={styles(activeTheme).weight}>{item.weight}{weightUnit}</span>
              </span>
              :
              null
            }
          </div>
        )
      })}
    </div>
  )
}

export default RMReviewPage;
