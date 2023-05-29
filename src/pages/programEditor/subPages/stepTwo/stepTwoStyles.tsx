const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      width: "100vw",
      paddingTop: 60,
      overflow: "auto",
    },

    AddWeekButton: {
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
    AddWeekButtonText: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
      userSelect: "none",
    },

    weekList: {
      width: "100%",
      height: "100%",
      paddingBottom: 180,
      overflow: "auto",
    },
    weekItem: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      marginTop: 5,
      marginBottom: 10,
      marginInline: 20,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      cursor: "pointer",
      userSelect: "none",
    },
    weekItemSelected: {
      backgroundColor: theme.active,
      paddingInline: 15,
      marginTop: 5,
      marginBottom: 10,
      marginInline: 20,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      cursor: "pointer",
      userSelect: "none",
    },
    weekItemText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
      userSelect: "none",
    },
    weekSelectedItemText: {
      color: theme.backgroundSecondary,
      fontSize: 20,
      fontWeight: "bold",
    },
    weekItemIconContainer: {
      width: 20,
      height: 20,
      cursor: "pointer",
    },
    weekItemIcon: {
      color: theme.text,
      fill: theme.text,
    },

    title: {
      color: theme.textHighlight,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
    },
  });
}

export default styles;
