const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "calc(100vh - 50px)",
      width: "100vw",
    },
    wrapper: {
      display: "flex",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      paddingLeft: 60,
    },
    exerciseList: {
      display: "flex",
      flexDirection: "column",
      overflowX: "auto",
      overflowY: "hidden",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      paddingTop: 60,
      paddingLeft: 60,
    },
    containerDrawer: {
      justifyContent: "center",
    },
    text1: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "bold",
    },
    text2: {
      color: theme.text,
    },
    noActiveProgramTextContainer: {
      backgroundColor: theme.backgroundPrimary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "calc(100vh - 50px)",
      marginLeft: 60,
      paddingInline: 30,
    },
    noActiveProgramTextTitle: {
      color: theme.text,
      fontWeight: "bold",
      fontSize: 24,
      textAlign: "center",
    },
    noActiveProgramTextSubtitle: {
      color: theme.text,
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
    }
  });
}

export default styles;
