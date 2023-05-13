const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      width: "100vw",
      // whiteSpace: "nowrap",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      // height: "100vh",
      overflow: "auto",
      // paddingLeft: 60,
      paddingBottom: 48,
      paddingTop: 80,
      // paddingTop: 44,
      paddingInline: 22,
    },
    title: {
      fontSize: 20,
      color: theme.textHighlight,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
    inputGroup: {
      // display: "flex",
      flex: 1,
      width: "100%",
      paddingVertical: 22,
      borderColor: theme.textFaded,
      borderBottomWidth: 1,
    },
    inputGroupTitle: {
      fontSize: 20,
      color: theme.textHighlight,
      marginBottom: 20,
      fontWeight: "bold",
    },
    inputLabel: {
      fontSize: 20,
      color: theme.text,
      minWidth: 47,
    },
    weightUnitLabel: {
      fontSize: 20,
      color: theme.text,
    },
    inputWeightRackRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    inputWeightRackColumn: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      backgroundColor: theme.backgroundSecondary,
      height: 50,
      width: 60,
      borderColor: theme.backgroundSecondary,
      borderWidth: 1,
      borderRadius: 15,
      padding: 10,
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
}

export default styles;
