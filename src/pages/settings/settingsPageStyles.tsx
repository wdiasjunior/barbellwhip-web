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
      paddingLeft: 150,
      // paddingRight: 22,
      // paddingBottom: 100,
      paddingTop: 44,
      // paddingInline: 20,
    },
    title: {
      color: theme.textHighlight,
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle: {
      color: theme.text,
      fontSize: 16,
      marginTop: 12,
    },

    themeSelectorContainer: {
      marginTop: 20,
      // maxWidth: "88%",
      marginRight: 100,
    },
    themeSelectorTitle: {
      color: theme.textHighlight,
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 10,
    },
    themeSelectorItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 46,
      marginBottom: 6,
      borderBottom: `1px solid ${theme.textFaded}`,
      cursor: "pointer",
    },
    themeSelectorIconContainer: {
      marginRight: 12,
      width: 20,
    },
    themeSelectorIcon: {
      color: theme.textHighlight,
      fill: theme.textHighlight,
    },
    themeSelectorItemText: {
      fontSize: 16,
      color: theme.text,
    },
  });
}

export default styles;
