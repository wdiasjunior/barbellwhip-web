const styles = (theme) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      paddingTop: 10,
      paddingInline: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: theme.textHighlight,
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle: {
      color: theme.text,
      fontSize: 16,
    },
  });
}

export default styles;
