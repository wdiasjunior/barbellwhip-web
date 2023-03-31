import React from "react";

import Header from "../../../../sharedComponents/header/header";

import styles from "./rmReviewPageStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../../../helpers/jotai/atomsWithStorage";
import { rmReviewPageAtom } from "../../../../helpers/jotai/navigationDataAtoms";

// interface Props {
//   onermOBJ: any;
//   weightUnit: any;
// }

const RMReviewPage = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [rmReviewPageData, ] = useAtom(rmReviewPageAtom);

  const onermOBJ = rmReviewPageData.oneRMs;
  const weightUnit = rmReviewPageData.weightUnit;

  return (
    <>
      <div className="ProgramPage_RMReviewPage_Container" style={styles(activeTheme).container}>
        <Header
          title={selectedLocale.programPage.rmReviewTitle}
          menu={false}
          backButton={true}
          goBackTo="/"
        />
        <div className="ProgramPage_RMReviewPage_List" style={styles(activeTheme).list}>
          {onermOBJ?.map((item, index) => {
            return (
              <div className="ProgramPage_RMReviewPage_Item" key={index} style={styles(activeTheme).item}>
                {item.name ? <span className="ProgramPage_RMReviewPage_Title" style={styles(activeTheme).title}>{item.name}</span> : null}
                {item.weight ?
                  <span className="ProgramPage_RMReviewPage_Subtitle" style={styles(activeTheme).subTitle}>
                    {selectedLocale.programPage.rmReviewWeightLabel}: <span className="ProgramPage_RMReviewPage_Label" style={styles(activeTheme).weight}>{item.weight}{weightUnit}</span>
                  </span>
                  :
                  null
                }
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RMReviewPage;
