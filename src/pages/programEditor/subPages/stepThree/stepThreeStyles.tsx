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
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      paddingTop: 60,
    },

    // container: {
    //   display: "flex",
    //   flexDirection: "column",
    //   backgroundColor: theme.backgroundPrimary,
    //   height: "100vh",
    //   width: "100vw",
    //   paddingTop: 60,
    //   // padding: 60,
    //   // whiteSpace: "nowrap",
    // },

    // container: {
    //   flex: 1,
    //   backgroundColor: theme.backgroundPrimary,
    // },

    exerciseList: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      // paddingInline: 20,
    },
    exerciseItem: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    exerciseItemText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
    },
    exerciseItemIcon: {
      color: theme.text,
      fill: theme.text,
      cursor: "pointer",
    },

    AddExerciseButton: {
      backgroundColor: theme.active,
      borderRadius: 10,
      marginTop: 12,
      marginBottom: 12,
      marginInline: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 36,
      cursor: "pointer",
    },
    AddExerciseButtonText: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
      userSelect: "none",
    },

    RestDayText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
      fontWeight: "Bottom",
      marginInline: 20,
      textAlign: "center"
    },

    title: {
      color: theme.textHighlight,
      fontSize: 20,
      fontWeight: "bold",
    },

    modalContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.backgroundPrimary,
      borderRadius: 10,
      paddingInline: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    modalItem: {
      backgroundColor: theme.backgroundSecondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      width: "100%",
      height: 50,
      marginTop: 5,
      marginBottom: 5,
      cursor: "pointer",
      userSelect: "none",
    },
    modalItemText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
}

export default styles;
