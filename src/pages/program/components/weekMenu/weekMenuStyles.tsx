const styles = (theme, isHover, index, selectedWeek) => {

  const itemBackground = () => {
    if(selectedWeek === index) {
      return theme.textHighlight;
    }
    if(isHover && isHover.isHover && isHover.index === index) {
      return isHover.index === index ? theme.backgroundPrimary : "transparent";
    }
  }

  return ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundSecondary,
      paddingTop: 50,
      height: "100vh",
      width: 250,
      maxWidth: 250,
      position: "absolute",
      right: 0,
      zIndex: 97,
    },
    drawerItemSelected: {
      marginInline: 15,
      marginTop: 3,
      marginBottom: 3,
      paddingInline: 15,
      backgroundColor: itemBackground(),
      borderRadius: 8,
      height: 40,
      display: "flex",
      alignItems: "center",
    },
    drawerItem: {
      marginInline: 15,
      marginTop: 3,
      marginBottom: 3,
      paddingInline: 15,
      backgroundColor: itemBackground(),
      borderRadius: 8,
      height: 40,
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    RMReview: {
      color: theme.textHighlight,
      fontSize: 24,
      fontWeight: "bold",
      marginLeft: 15,
      marginTop: 8,
      marginBottom: 10,
      paddingBottom: 10,
      borderBottom: `1px solid ${theme.textFaded}`,
      width: "90%",
      display: "block",
      cursor: "pointer",
    },
    weekSelectorContainer: {
      flex: 1,
    },
    titleWeekDrawer: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
      marginLeft: 15,
      marginBottom: 10,
    },
    drawerTextSelected: {
      color: theme.backgroundSecondary,
      fontWeight: "bold",
      fontSize: 16,
    },
    drawerText: {
      color: selectedWeek === index ? theme.backgroundSecondary : theme.text,
      fontWeight: "bold",
      fontSize: 16,
    },
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 96,
      background: "#00000070",
    },
  });
}

export default styles;
