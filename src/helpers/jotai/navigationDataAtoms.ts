import { atom } from "jotai";

const exerciseItemPageAtom = atom({
  exerciseName: "",
  weightUnit: "kg",
  exerciseOBJ: {},
  onermOBJ: {},
  rmId: "",
});

const rmReviewPageAtom = atom({
  oneRMs: [],
  weightUnit: "kg",
});

export { exerciseItemPageAtom, rmReviewPageAtom };
