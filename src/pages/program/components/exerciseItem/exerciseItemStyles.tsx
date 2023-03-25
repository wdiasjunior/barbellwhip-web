const styles = (theme) => {
  return ({
    item: {
      backgroundColor: theme.backgroundSecondary,
      paddingInline: 15,
      marginTop: 5,
      marginBottom: 5,
      marginInline: 20,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      cursor: "pointer",
      overflow: "hidden",
      color: theme.text,
      textDecoration: "none",
    },
    text1: {
      color: theme.text,
      fontSize: 22,
      // lineHeight: 30,
      fontWeight: "bold",
      textTransform: "capitalize",
      whiteSpace: "nowrap",
    },
    text2: {
      color: theme.text,
    },
  });
}

export default styles;
