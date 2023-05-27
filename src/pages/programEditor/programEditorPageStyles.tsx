const styles = (theme) => {
  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundPrimary,
      height: "100vh",
      width: "100vw",
      // paddingTop: 60,
      // padding: 60,
      // whiteSpace: "nowrap",
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: theme.backgroundPrimary,
      // height: "100vh",
      overflow: "auto",
      // paddingLeft: 60,
      paddingLeft: 30,
      paddingBottom: 48,
      paddingTop: 55,
    },
    wrapperLoading: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
    },

    noProgramListTextContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      flex: 1,
    },
    noProgramListText: {
      color: theme.text,
      fontWeight: "bold",
      fontSize: 24,
      textAlign: "center",
    },

    FabButton: {
      backgroundColor: theme.active,
      borderRadius: 80,
      width: 60,
      height: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 20,
      right: 20,
      zIndex: 999999,
      cursor: "pointer",
    },
    FabButtonText: {
      color: theme.text,
      fontSize: 26,
    },

    programList: {
      width: "100%",
      height: "100%",
      flex: 1,
    },
    programListWrapper: {
      flex: 1,
      paddingBottom: 90,
      marginInline: 44,
    },
    programItem: {
      // marginInline: 20,
      backgroundColor: theme.backgroundSecondary,
      color: theme.text,
      paddingLeft: 15,
      marginTop: 15,
      marginBottom: 5,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    programItemSelected: {
      // marginInline: 20,
      backgroundColor: theme.active,
      color: theme.text,
      paddingLeft: 15,
      marginTop: 15,
      marginBottom: 5,
      borderRadius: 10,
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    programItemText: {
      color: theme.text,
      fontSize: 20,
      lineHeight: 30,
      fontWeight: "bold",
    },
    iconRight: {
      width: 24,
      height: 24,
      color: theme.text,
      fill: theme.text,
      cursor: "pointer",
      marginRight: 12,
    },

    modalContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.backgroundPrimary,
      borderRadius: 10,
      paddingInline: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    modalItem: {
      backgroundColor: theme.backgroundSecondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      width: "100%",
      height: 50,
      marginTop: 5,
      marginBottom: 5,
      cursor: "pointer",
    },
    modalItemText: {
      color: theme.text,
      fontSize: 20,
      fontWeight: "bold",
    },
  });
}

export default styles;
