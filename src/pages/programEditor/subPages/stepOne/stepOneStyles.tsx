const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      width: "100vw",
      paddingTop: 60,
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      width: "100%",
      overflow: "auto",
      paddingBottom: 180,
    },

    programNameTextInput: {
      backgroundColor: theme.backgroundSecondary,
      height: 30,
      borderColor: theme.backgroundSecondary,
      borderWidth: 1,
      borderRadius: 15,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      padding: 10,
      paddingLeft: 22,
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
    },
    oneRMTextInput: {
      backgroundColor: theme.backgroundSecondary,
      height: 30,
      borderColor: theme.placeholderText,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 6,
      marginBottom: 6,
      padding: 10,
      paddingLeft: 22,
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
    },
    oneRMNumberInput: {
      backgroundColor: theme.backgroundSecondary,
      height: 30,
      width: "80%",
      borderColor: theme.placeholderText,
      borderWidth: 1,
      borderRadius: 12,
      marginTop: 6,
      marginBottom: 6,
      marginRight: 20,
      alignSelf: "flex-start",
      padding: 10,
      paddingLeft: 22,
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
    },

    onermItem: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      paddingTop: 12,
      paddingBottom: 12,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      borderRadius: 10,
      height: "fit-content",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    onermItem_InputRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    onermItemText: {
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
    },
    onermItemIconContainer: {
      width: 30,
      height: 30,
      marginInline: "auto",
    },
    onermItemIcon: {
      color: theme.text,
      fill: theme.text,
    },

    AddOneRMButton: {
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
    AddOneRMButtonText: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
      userSelect: "none",
    },

    weightUnitContainer: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      borderRadius: 10,
      height: 50,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
    weightUnitText: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
}

export default styles;
