const styles = (theme) => {
  return ({
    container: {
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 70,
      // paddingLeft: 60,
    },
    item: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      paddingTop: 10,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 20,
      marginInline: 20,
      borderRadius: 10,
      height: 80,
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
    },
    title: {
      color: theme.text,
      fontSize: 26,
      fontWeight: "bold",
    },
    subTitle: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
    },
    weight: {
      color: theme.textHighlight,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
}

export default styles;
