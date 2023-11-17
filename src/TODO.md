- copy new stuff/logic that gets done in the react native repo

- jotai - change this `const [, setValue] = useAtom(valueAtom)` to useSetAtom to increase performance?
  - https://jotai.org/docs/api/core#use-set-atom

- figure out a way to make a better desktop app layout
- test "install web page as app" thingy in ios and android
-

# fix bugs
- exerciseItemPage not scrolling if content overflows
- weekMenu not scrolling if content overflows
- if exerciseItemPage is reloaded it throws 404 (should go back to /)
- program page glitching just like in react native
- change program editor program data to atom with storage in both apps? prevent accidental discard of progress
- prevent adding empty days (rest days) and empty exercises to the saved file?
  - donein react native repo. needs testing
  - does program page have a rest day info text?
- bug duplicating training programs on save, and possibly on import as well
- program editor not working on iOS

---

- better desktop web editor
