const styles = (theme) => {
  return ({
    header: {
      height: 50,
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.backgroundSecondary,
      padding: 0,
      margin: 0,
      position: "fixed",
      zIndex: 999,
    },
    contentLeft: {
      display: "flex",
      alignItems: "center",
      width: 24,
      height: 24,
      fill: theme.text,
      marginLeft: 18,
      marginRight: 32,
      cursor: "pointer",
    },
    contentRight: {
      width: 30,
      // height: 30,
      marginRight: 10,
      fill: theme.text,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      cursor: "pointer",
    },
    contentCenter: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    headerText: {
      fontWeight: "bold",
      fontSize: 20,
      color: theme.text,
      maxWidth: 300,
    },
    iconLeft: {
      left: -2,
      marginRight: 22,
      color: theme.text,
    },
    iconRight: {
      width: 40,
      paddingLeft: 10,
      color: theme.text,
    },
  });
}

export default styles;
