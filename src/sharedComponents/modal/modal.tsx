import React from "react";

import styles from "./modalStyles";

const Modal = ({children}) => {



  return (
    <>
      <div style={styles.container}>
        {children}
      </div>
    </>
  );
}

export default Modal;
