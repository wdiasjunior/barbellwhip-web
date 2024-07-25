# TODO

- [-] add favicon

- [-] copy new stuff/logic/locales that gets done in the react native repo

- [ ] jotai - change this `const [, setValue] = useAtom(valueAtom)` to useSetAtom to increase performance?
  - https://jotai.org/docs/api/core#use-set-atom

- [-] hide collapsed nav bar on mobile view to free up space
- [-] hide week menu open button if no program is selected
- [ ] figure out a way to make a better desktop app layout
- [ ] improve the desktop editor experience
- [ ] test "install web page as app" thingy in ios and android

# BUGS
- [-] on reload, pages other than / default to 404
  - [-] if exerciseItemPage is reloaded it throws 404 (should go back to /)
- [ ] exerciseItemPage not scrolling if content overflows
- [ ] weekMenu not scrolling if content overflows
- [ ] program page glitching just like in react native
- [-] change program editor program data to atom with storage in both apps? prevent accidental discard of progress
- [ ] prevent adding empty days (rest days) and empty exercises to the saved file?
  - [ ] done in react native repo. needs testing
  - [ ] does program page have a rest day info text?
- [ ] bug duplicating training programs on save, and possibly on import as well
- [ ] program editor not working on iOS
- [-] move bumper button to settings page?
  - [-] button on web version seems to be bugged on initial state
