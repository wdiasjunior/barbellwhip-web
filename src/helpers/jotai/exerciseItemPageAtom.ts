import { atom } from "jotai";

const exerciseItemPageAtom = atom({
  exerciseName: "",
  weightUnit: "kg",
  exerciseOBJ: {},
  onermOBJ: {},
  rmId: "",
});

export { exerciseItemPageAtom };
