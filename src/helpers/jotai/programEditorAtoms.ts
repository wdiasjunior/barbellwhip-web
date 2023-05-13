import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const programEditorDataAtom = atom({
  programName: "",
  weightUnit: "kg",
  oneRMs: [],
  trainingProgram: [ { week: new Array(7).fill({ day:[] }) } ]
});

const selectedDayAtom = atom(0);

const selectedWeekAtom = atom(0);

const programEditorModeAtom = atom("Create");

const programListAtom = atomWithStorage("programListAtom", []);

export {
  programEditorDataAtom,
  selectedDayAtom,
  selectedWeekAtom,
  programEditorModeAtom,
  programListAtom,
};
