const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
    },
    wrapper: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
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
    containerDrawer: {
      flex: 1,
      backgroundColor: theme.backgroundSecondary,
    },
    drawerItemSelected: {
      marginInline: 15,
      marginTop: 3,
      marginBottom: 3,
      paddingInline: 15,
      backgroundColor: theme.textHighlight,
      borderRadius: 10,
      height: 40,
      justifyContent: "center",
    },
    drawerItem: {
      marginInline: 15,
      marginTop: 3,
      marginBottom: 3,
      paddingInline: 15,
      borderRadius: 10,
      height: 40,
      justifyContent: "center",
    },
    RMReview: {
      color: theme.textHighlight,
      fontSize: 24,
      fontWeight: "bold",
      marginLeft: 15,
      marginTop: 8,
      marginBottom: 10,
      paddingBottom: 10,
      borderColor: theme.textFaded,
      borderBottomWidth: 1,
      width: "90%",
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
      color: theme.text,
      fontWeight: "bold",
      fontSize: 16,
    },
    noActiveProgramTextContainer: {
      backgroundColor: theme.backgroundPrimary,
      display: "flex",
      // flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginInline: 30,
      paddingLeft: 60,
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
