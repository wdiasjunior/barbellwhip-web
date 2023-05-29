import React, { useRef, useState, useEffect, } from "react";

import Icon from "../icon";

import styles from "./numberInputStyles";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom } from "../../helpers/jotai/atomsWithStorage";

interface Props {
  toggleModal(): any;
  inputLabel: string;
}

const NumberInput = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "0", "."];
  const [weightString, setWeightString] = useState("0");

  const handleInput = (value: string) => {

    switch(value) {
      case "0":
        if(weightString == "0") {
          break;
        } else {
          if(weightString.length == 0) {
            break;
          } else {
            setWeightString(weightString + value);
            break;
          }
        }
        break;

      case " ":
        break;

      case ".":
        if(weightString.slice(-1) == ".") {
          break;
        } else if(weightString.includes(".")) {
          break;
        } else {
          setWeightString(weightString + value);
          break;
        }

      case "backspace":
        const weightStringCopy = weightString;
        const deleteLastCharacter = weightStringCopy.substr(0, weightStringCopy.length - 1);
        if(deleteLastCharacter.length == 0) {
          setWeightString("0");
        } else {
          setWeightString(deleteLastCharacter);
        }
        break;

      default:
        if(weightString == "0") {
          setWeightString(value);
        } else {
          setWeightString(weightString + value);
        }
        break;
    }
  }

  return (
    <div style={styles(activeTheme).container}>
      <div style={styles(activeTheme).input}>
        <span style={styles(activeTheme).inputText}>{weightString} <span style={styles(activeTheme).inputTextLabel}>{props.inputLabel}</span></span>
        <div style={styles(activeTheme).iconContainer} onClick={() => handleInput("backspace")}>
          <Icon
            name="backspace"
            size={30}
            style={styles(activeTheme).icon}
          />
        </div>
      </div>

      <div style={styles(activeTheme).numpad}>
        {buttons.map((value, index) => {
          return (
            <div
              key={index}
              style={styles(activeTheme).numpadButton}
              onClick={() => handleInput(value)}
            >
              <span style={styles(activeTheme).numpadButtonText}>{value}</span>
            </div>
          );
        })}
      </div>

      <div style={styles(activeTheme).bottomButtonsRow}>
        <span style={styles(activeTheme).bottomButtonsText} onClick={props.toggleModal}>{selectedLocale.numberInputModal.cancelButtonLabel}</span>
        <span style={styles(activeTheme).bottomButtonsText} onClick={() => props.toggleModal(weightString, props.inputLabel)}>OK</span>
      </div>

    </div>
  );
}

export default NumberInput;
