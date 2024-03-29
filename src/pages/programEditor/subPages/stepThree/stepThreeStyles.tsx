const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      // height: "calc(100vh - 50px)",
      width: "100vw",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      overflow: "auto",
      height: "100vh",
      paddingTop: 60,
    },

    exerciseList: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      paddingBottom: 60,
      overflow: "auto",
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
      marginRight: "auto",
      marginLeft: 20,
    },
    exerciseItemIcon: {
      color: theme.text,
      fill: theme.text,
      cursor: "pointer",
    },
    exerciseItemIconEdit: {
      color: theme.text,
      fill: theme.text,
      cursor: "pointer",
      marginRight: 10,
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
      minHeight: 36,
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
      flexDirection: "column",
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
