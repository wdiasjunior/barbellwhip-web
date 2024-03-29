const styles = (theme) => {
  return ({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      whiteSpace: "nowrap",
      backgroundColor: theme.backgroundPrimary,
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100%",
      width: "100%",
      overflow: "auto",
      paddingLeft: 60,
      paddingBottom: 100,
      paddingTop: 44,
    },
    controlsContainer: {
      marginInline: 50,
    },

    cardIncrement: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 22,
      marginTop: 20,
      borderRadius: 10,
      height: 260,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      color: theme.text,
      fontSize: 12,
    },
    bumperSwitchContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bumperLabel: {
      color: theme.text,
      fontSize: 16,
      marginTop: 20,
    },
    rowWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginBottom: 20,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    incrementWrapper: {
      minWidth: 50,
      minHeight: 50,
      backgroundColor: theme.backgroundSecondary,
      border: `2px solid ${theme.active}`,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
    },
    incrementText: {
      color: theme.text,
      fontSize: 16,
    },
    weightWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginInline: 20,
      cursor: "pointer",
    },
    weight: {
      color: theme.text,
      fontSize: 24,
      textAlign: "center",
    },
    weightConverted: {
      color: theme.text,
      fontSize: 12,
      textAlign: "center",
    },
    info: {
      color: theme.text,
      fontSize: 18,
      textAlign: "center",
    },
    infoWeight: {
      color: theme.textHighlight,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },

    cardWarning: {
      backgroundColor: theme.textHighlight,
      padding: 16,
      marginBottom: 20,
      borderRadius: 10,
      height: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textWarning: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },

    modalContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
}

export default styles;
