const styles = (theme, isHover, index, activeRoute, itemRoute) => {

  const itemBackground = () => {
    if(itemRoute === activeRoute) {
      return theme.activeTransparent;
    }
    if(isHover && isHover.isHover && isHover.index === index) {
      return isHover.index === index ? theme.backgroundPrimary : "transparent";
    }
  }

  return ({
    container: {
      display: "flex",
      flexDirection: "column",
      // width: isHover && isHover.isHover ? 300 : 40,
      overflow: "hidden",
      height: "100vh",
      paddingTop: 50,
      paddingInline: 10,
      background: theme.backgroundSecondary,
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 99,
    },
    list: {
      margin: 0,
      padding: 0,
      overflow: "hidden",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 40,
      marginBottom: 8,
      paddingLeft: 70,
      background: itemBackground(),
      borderRadius: 8,
      cursor: "pointer",
      overflow: "hidden",
      position: "relative",
      color: theme.text,
      textDecoration: "none",
    },
    itemText: {
      color: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      fontWeight: itemRoute === activeRoute ? "bold" : "normal",
    },
    itemIcon: {
      fill: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      width: 24,
      height: 24,
      // marginRight: 30,
      position: "absolute",
      left: 8,
    },
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 98,
      background: "#00000070",
    },
  });
}

export default styles;
