import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { themes } from "../../themes/";
import { locales } from "../../db/locales/";

// Active Program
const activeProgramAtom = atomWithStorage("activeProgramAtom", {});
const activeProgramNameAtom = atomWithStorage("activeProgramNameAtom", "");

// Program page
const programPageSelectedDayAtom = atomWithStorage("programPageSelectedDayAtom", 0);
const programPageSelectedWeekAtom = atomWithStorage("programPageSelectedWeekAtom", 0);

// 1RM Calculator Page
const calculatorPageRepsAtom = atomWithStorage("calculatorPageReps", 1);
const calculatorPageWeightAtom = atomWithStorage("calculatorPageWeight", 150);
const calculatorPageWeightUnitAtom = atomWithStorage("calculatorPageWeightUnit", "kg");

// Plate Math Page
const plateMathPageWeight = atomWithStorage("plateMathPageWeight", 150);
const plateMathWeightUnit = atomWithStorage("plateMathWeightUnit", false); // false == kg == left, true == lbs == right
const plateMathShowBumper = atomWithStorage("plateMathShowBumper", true);
const plateMathBarWeight = atomWithStorage("plateMathBarWeight", {
  lbs: 45,
  kg: 20,
});
const plateMathWeightRack = atomWithStorage("plateMathWeightRack", {
  kg: {
    50   : 0,
    25   : 0,
    20   : 6,
    15   : 2,
    10   : 2,
    5    : 2,
    2.5  : 2,
    2    : 0,
    1.5  : 0,
    1.25 : 2,
    1    : 0,
    0.5  : 0,
  },
  lbs: {
    100  : 0,
    55   : 0,
    45   : 6,
    35   : 2,
    25   : 2,
    10   : 2,
    5    : 2,
    2.5  : 2,
    1.25 : 2,
  }
});
const plateMathBumperPlatesRack = atomWithStorage("plateMathBumperPlatesRack", {
  kg: {
    25 : 0,
    20 : 0,
    15 : 2,
    10 : 2,
    5  : 2
  },
  lbs: {
    55 : 0,
    45 : 0,
    35 : 2,
    25 : 2,
    10 : 2
  },
});

// Settings Page - for future reference only
// const settingsPageWeightRoundAtom = atomWithStorage("settingsPageWeightRound", true);
// object with keys for every calc funtion and every value is true by defalut
// const settingsPage1RMCalculationFormulasAtom = atomWithStorage("settingsPage1RMCalculationFormulas", {});

// Theme
const activeThemeIdAtom = atomWithStorage("activeThemeIdAtom", "chakraUI");
const activeThemeAtom = atom((get) => {
  const themeId = get(activeThemeIdAtom);
  const themeIndex = themes.findIndex((t) => t.id === themeId);
  if (themeIndex >= 0) {
    return themes[themeIndex].theme;
  } else {
    return themes[0].theme;
  }
});

// Locale
const selectedLocaleIdAtom = atomWithStorage("selectedLocaleIdAtom", "english");
const selectedLocaleAtom = atom((get) => {
  const localeId = get(selectedLocaleIdAtom);
  const localeIndex = locales.findIndex((t) => t.id === localeId);
  if (localeIndex >= 0) {
    return locales[localeIndex].locale;
  } else {
    return locales[0].locale;
  }
});

export {
  activeProgramAtom,
  activeProgramNameAtom,
  programPageSelectedDayAtom,
  programPageSelectedWeekAtom,
  calculatorPageRepsAtom,
  calculatorPageWeightAtom,
  calculatorPageWeightUnitAtom,
  plateMathPageWeight,
  plateMathWeightUnit,
  plateMathShowBumper,
  plateMathBarWeight,
  plateMathWeightRack,
  plateMathBumperPlatesRack,
  activeThemeIdAtom,
  activeThemeAtom,
  selectedLocaleIdAtom,
  selectedLocaleAtom
};
