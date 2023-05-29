const styles = (theme) => {
  return ({
    container: {
      position: "fixed",
      zIndex: 1001,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: "fit-content",
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
      zIndex: 1000,
      background: "#00000070",
    },
  });
}

export default styles;
