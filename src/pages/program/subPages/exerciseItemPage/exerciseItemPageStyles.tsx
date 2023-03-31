const styles = (theme) => {
  return ({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      // paddingInline: 20,
    },
    content: {
      flex: 1,
      paddingTop: 10,
    },
    setList: {
      flex: 1,
      paddingTop: 70,
      // paddingLeft: 80,
      paddingLeft: 20,
      height: "100vh",
    },
    setListItem: {
      display: "flex",
      flexDirection: "column",
      paddingBottom: 20,
      paddingRight: 20,
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.textFaded,
    },
    setListItemRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    title: {
      color: theme.textHighlight,
      fontSize: 26,
      fontWeight: "bold",
      paddingBottom: 8,
    },
    label: {
      color: theme.text,
      fontSize: 16,
      marginTop: 8,
    },
    data: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "bold",
      marginLeft: 4,
    },
    weightText: {
      color: theme.textHighlight,
      fontSize: 24,
      fontWeight: "bold",
    },
    description: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
      // marginTop: 10,
    },
  });
}

export default styles;
