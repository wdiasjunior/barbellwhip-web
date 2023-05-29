const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundSecondary,
      padding: 16,
      borderRadius: 10,
      width: 390,
      maxWidth: 390,
      height: 410,
    },
    input: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `2px solid ${theme.textFaded}`,
      height: 50,
      width: "100%",
      marginBottom: 30,
      paddingBottom: 12,
    },
    inputText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24,
      // lineHeight: 24,
      color: theme.text,
      marginLeft: 25,
    },
    numpad: {
      // flex: 1,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },
    numpadButton: {
      padding: 10,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      cursor: "pointer",
    },
    numpadButtonText: {
      textAlign: "center",
      fontSize: 30,
      // lineHeight: 30,
      color: theme.text,
      userSelect: "none",
    },
    bottomButtonsRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 20,
    },
    bottomButtonsText: {
      fontSize: 20,
      color: theme.text,
      marginRight: 30,
      cursor: "pointer",
    },
    iconContainer: {
      height: 30,
      width: 30,
      cursor: "pointer",
      color: theme.text,
      fill: theme.text,
    },
    icon: {
      color: theme.text,
      fill: theme.text,
    },
  });
}

export default styles;
