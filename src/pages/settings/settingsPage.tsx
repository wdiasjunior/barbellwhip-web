import React, { useState, useEffect, useLayoutEffect, } from "react";

import Header from "../../sharedComponents/header/header";
import Icon from "../../sharedComponents/icon";

import styles from "./settingsPageStyles";

import { useAtom } from "jotai";
import {
  activeThemeIdAtom,
  activeThemeAtom,
  selectedLocaleIdAtom,
  selectedLocaleAtom
} from "../../helpers/jotai/atomsWithStorage";

import { themes } from "../../themes/";
import { locales } from "../../db/locales/";

interface Props {
  setNavBarOpen: () => void;
}

const SettingsPage = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [activeThemeId, setActiveThemeId] = useAtom(activeThemeIdAtom);

  const [selectedLocale, ] = useAtom(selectedLocaleAtom);
  const [selectedLocaleId, setSelectedLocaleId] = useAtom(selectedLocaleIdAtom);

  return (
    <div style={styles(activeTheme).container}>
      <Header
        title={selectedLocale.settingsPage.title}
        setNavBarOpen={props.setNavBarOpen}
      />
      <div style={styles(activeTheme).wrapper}>
        {/*<span style={styles(activeTheme).title}>Settings Page</span>*/}

        {/* TODO */}
        {/*<span style={styles(activeTheme).subtitle}>
          Weights are rounded to 2.5kg so that it's easier on the head mid training session, and it's applied in every screen.
          In the future, it will be added a toggle so that you can disable this behaviour.

          enable rounding of 1rm estimates and 1rm percentages?
          global setting? 1 switch of each per page?
        </span>*/}

        {/*<span style={styles(activeTheme).subtitle}>Calculation Formulas - Select the formulas used to calculate your 1RM</span>*/}

        <div style={styles(activeTheme).themeSelectorContainer}>
          <span style={styles(activeTheme).themeSelectorTitle}>{selectedLocale.settingsPage.languageSelectorTitle}:</span>
          {locales.map((locale, index) => {
            return (
              <div
                style={styles(activeTheme).themeSelectorItem}
                key={index + "" + locale.id}
                onClick={() => setSelectedLocaleId(locale.id)}
              >
                <div style={styles(activeTheme).themeSelectorIconContainer}>
                  {locale.id === selectedLocaleId &&
                    <Icon
                      name="checkmark-sharp"
                      size={20}
                      style={styles(activeTheme).themeSelectorIcon}
                    />
                  }
                </div>
                <span style={styles(activeTheme).themeSelectorItemText}>{locale.name}</span>
              </div>
            )
          })}
        </div>

        <div style={styles(activeTheme).themeSelectorContainer}>
          <span style={styles(activeTheme).themeSelectorTitle}>{selectedLocale.settingsPage.themeSelectorTitle}:</span>
          {themes.map((theme, index) => {
            return (
              <div
                style={styles(activeTheme).themeSelectorItem}
                key={index + "" + theme.id}
                onClick={() => setActiveThemeId(theme.id)}
              >
                <div style={styles(activeTheme).themeSelectorIconContainer}>
                  {theme.id === activeThemeId &&
                    <Icon
                      name="checkmark-sharp"
                      size={20}
                      style={styles(activeTheme).themeSelectorIcon}
                    />
                  }
                </div>
                <span style={styles(activeTheme).themeSelectorItemText}>{theme.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
