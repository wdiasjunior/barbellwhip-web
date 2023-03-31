import { atom } from "jotai";

const exerciseItemPageAtom = atom({
  exerciseName: "",
  weightUnit: "kg",
  exerciseOBJ: {},
  onermOBJ: {},
  rmId: "",
});

const rmReviewPageAtom = atom({
  onermOBJ: [],
  weightUnit: "kg",
});

export { exerciseItemPageAtom, rmReviewPageAtom };
