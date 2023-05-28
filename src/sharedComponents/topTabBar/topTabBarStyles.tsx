const styles = (theme) => {
  return ({
    container: {
      position: "relative",
      top: 50,
      marginLeft: 60,
      maxHeight: 53,
      minHeight: 53,
      overflowY: "hidden",
      overflowX: "auto",
      scrollPadding: 80,
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
    },
    tabItem: {
      backgroundColor: theme.backgroundSecondary,
      height: 50,
      minWidth: 80,
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: `3px solid ${theme.backgroundSecondary}`,
      cursor: "pointer",
    },
    tabItemSelected: {
      backgroundColor: theme.backgroundSecondary,
      height: 50,
      minWidth: 80,
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottom: `3px solid ${theme.textHighlight}`,
      cursor: "pointer",
    },
    text: {
      color: theme.text,
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "capitalize",
      userSelect: "none",
    },
    textSelected: {
      color: theme.textHighlight,
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "capitalize",
      userSelect: "none",
    },
  });
}

export default styles;
