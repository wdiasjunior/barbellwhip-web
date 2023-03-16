import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

import { themes } from "../../themes/";
import { locales } from "../../db/locales/";

// const storage = createJSONStorage(() => AsyncStorage);

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

// Plate Math Page - for future reference only
// const plateMathPageWeight = atomWithStorage("plateMathPageWeight", 150);
// const plateMathWeightUnit = atomWithStorage("plateMathWeightUnit", "kg");
// const plateMathSelectedBar = atomWithStorage("plateMathSelectedBar", 1);
// const plateMathWeightRack = atomWithStorage("plateMathWeightRack", 1);

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
  activeThemeIdAtom,
  activeThemeAtom,
  selectedLocaleIdAtom,
  selectedLocaleAtom
};
