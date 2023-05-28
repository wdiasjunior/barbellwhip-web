import React, { useRef } from "react";
import Icon from "../icon";

import { useNavigate } from "react-router-dom";

import styles from "./headerStyles";

import { useAtom } from "jotai";
import { programEditorDataAtom, programListAtom } from "../../helpers/jotai/programEditorAtoms";
import { activeThemeAtom } from "../../helpers/jotai/atomsWithStorage";

import { deepClone } from "../../helpers/deepClone";

interface Props {
  setIsMenuOpen(): any;
  title: string;
  menu: boolean;
  weightRack: boolean;
  saveButton: boolean;
  backButton: boolean;
  import: boolean;
  importProgram(): any;
  setNavBarOpen: () => void;
  goBackTo: string;
}

const Header = (props: Props) => {

  const navigate = useNavigate();

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [programEditorData, setProgramEditorData] = useAtom(programEditorDataAtom);
  const [, setProgramList] = useAtom(programListAtom);
  const inputRef = useRef(null);

  const saveProgram = () => {
    const fileName = programEditorData.programName;
    if(fileName !== "") {
      const programJSON = JSON.stringify(programEditorData);
      setProgramList(prev => [...prev, { name: fileName + ".json", program: programJSON }]);
      navigate(props.goBackTo);
    } else {
      alert("Please fill in the program name field.")
    }
  }

  const importProgram = (e) => {
    props.importProgram(e);
  }
  const handleClickImportProgram = () => {
    inputRef.current.click();
    console.log(inputRef.current);
    importProgram(inputRef.current);
  }

  const setMenuOpenFromHeader = () => {
    props.setIsMenuOpen(prev => !prev);
  }

  const saveButton = async () => {
    // TODO
    // - add loading indicator on save
    // - remove empty days and empty weeks on save
    await saveProgram();
  }

  const backButton = () => {
    navigate(props.goBackTo);
    // TODO
    // if(!navigation?.getState()?.routes[0]?.name === "Info") {
      // ask to save before goBack
      // prevent android back button goBack
      // console.log("stepOne");
      // navigation.goBack();
    // }
  }

  const handleToggleNavBar = () => {
    props.setNavBarOpen((isOpen) => !isOpen);
  }

  return (
    <div className="Header" style={styles(activeTheme).header}>
      <div className="Header_ContentLeft" style={styles(activeTheme).contentLeft} onClick={props.backButton ? backButton : handleToggleNavBar}>
        {props.backButton ?
          <Icon
            name="arrow-back-sharp"
            style={styles(activeTheme).iconLeft}
            className="Header_IconLeft"
          />
          :
          <Icon
            name="menu-sharp"
            style={styles(activeTheme).iconLeft}
            className="Header_IconLeft"
          />
        }
      </div>
      <div style={styles(activeTheme).contentCenter}>
        <span style={styles(activeTheme).headerText}>{props.title} </span>
      </div>
      {/* add onClick to parent of icon since for some reason it doesn't work using it directly in the icon */}
      {props.menu &&
        <div style={styles(activeTheme).contentRight} onClick={setMenuOpenFromHeader}>
            <Icon
              name="ellipsis-vertical"
              style={styles(activeTheme).iconRight}
              className="Header_IconRight"
            />
        </div>
      }
      {props.weightRack &&
        <div style={styles(activeTheme).contentRight} onClick={() => navigate("/weightRackPage")}>
            <Icon
              name="settings-sharp"
              style={styles(activeTheme).iconRight}
              className="Header_IconRight"
            />
        </div>
      }
      {props.import &&
        <div style={styles(activeTheme).contentRight} onClick={handleClickImportProgram}>
            <input
              type="file"
              onChange={importProgram}
              // accept="application/JSON"
              ref={inputRef}
              style={{display: "none"}}
            />
            <Icon
              name="download-outline"
              style={styles(activeTheme).iconRight}
              className="Header_IconRight"
            />
        </div>
      }
      {props.saveButton &&
        <div style={styles(activeTheme).contentRight} onClick={saveButton}>
            <Icon
              name="save"
              style={styles(activeTheme).iconRight}
              className="Header_IconRight"
            />
        </div>
      }
    </div>
  );
}

export default Header;
