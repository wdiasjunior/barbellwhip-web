const styles = (theme, isHover, index, activeRoute, itemRoute) => {

  // const itemBackground = () => {
  //   if(itemRoute === activeRoute) {
  //     return theme.activeTransparent;
  //   }
  //   if(isHover && isHover.isHover && isHover.index === index) {
  //     return isHover.index === index ? theme.backgroundPrimary : "transparent";
  //   }
  // }

  return ({
    container: {
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
      height: 50,
      width: "100vw",
      background: theme.backgroundSecondary,
      position: "fixed",
      bottom: 0,
      left: 0,
      zIndex: 99,
    },
    list: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: "100%",
      cursor: "pointer",
      position: "relative",
      color: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      textDecoration: "none",
    },
    itemText: {
      color: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      fontSize: 10,
      minWidth: "fit-content",
      whiteSpace: "nowrap",
      position: "relative",
      bottom: -6,
    },
    itemText_Steps: {
      color: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      fontSize: 16,
      minWidth: "fit-content",
      whiteSpace: "nowrap",
      position: "relative",
      bottom: 6,
      fontWeight: "bold",
    },
    itemIconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    itemIcon: {
      fill: itemRoute === activeRoute ? theme.textHighlight : theme.text,
      width: 24,
      height: 24,
      marginInline: "auto",
      position: "absolute",
      top: 3,
    },
  });
}

export default styles;
