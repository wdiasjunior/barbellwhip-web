const styles = (theme) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      paddingTop: 10,
    },
    item: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      paddingTop: 10,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      borderRadius: 10,
      height: 80,
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
