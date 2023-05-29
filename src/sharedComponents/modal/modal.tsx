import React from "react";

import styles from "./modalStyles";

import { useAtom } from "jotai";
import { activeThemeAtom } from "../../helpers/jotai/atomsWithStorage";

interface Props {
  isVisible: boolean;
  onBackdropPress: () => void;
  children: any;
}

const Modal = (props: Props) => {
  const [activeTheme, ] = useAtom(activeThemeAtom);

  return (
    <>
      {props.isVisible &&
        <>
          <div style={styles(activeTheme).container} className="ModalContainer">
            {props.children}
          </div>
          <div style={styles(activeTheme).backdrop} onClick={props.onBackdropPress} className="ModalBackdrop"></div>
        </>
      }
    </>
  );
}

export default Modal;
