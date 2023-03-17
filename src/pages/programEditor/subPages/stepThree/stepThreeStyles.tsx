const styles = (theme) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
    },

    exerciseList: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      justifyContent: "flex-start",
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
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    exerciseItemText: {
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
      flex:1
    },
    exerciseItemIcon: {
      color: theme.text,
    },

    AddExerciseButton: {
      flex: 1,
      backgroundColor: theme.active,
      borderRadius: 10,
      marginTop: 12,
      marginBottom: 12,
      marginInline: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    AddExerciseButtonText: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 35,
      fontWeight: "bold",
    },

    RestDayText: {
      color: theme.text,
      fontSize: 20,
      lineHeight: 33,
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
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      width: "100%",
      height: 50,
      marginTop: 5,
      marginBottom: 5,
    },
    modalItemText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
}

export default styles;
