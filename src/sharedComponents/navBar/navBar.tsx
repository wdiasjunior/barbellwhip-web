import React, { useState, useEffect, } from "react";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import Icon from "../icon";

import routes from "./routes";
import styles from "./navBarStyles.tsx";
import "./navBar.css";

interface Props {
  navBarOpen: boolean;
  setNavBarOpen: () => void;
}

const NavBar = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [activeRoute, setActiveRoute] = useState("programPage");

  const handleNavigate = (_route: string) => {
    console.log(_route);
    setActiveRoute(_route);
  }

  const [isHover, setIsHover] = useState({ isHover: false, index: 0 });
  const handleMouseEnter = (index: any) => {
    setIsHover({ isHover: true, index: index });
  }
  const handleMouseLeave = (index: any) => {
    setIsHover({ isHover: false, index: index });
  }

  return (
    <>
      <nav className={"NavBar"} style={{...styles(activeTheme).container, width: props.navBarOpen ? 300 : 40 }}>
        {/* add backdrop when props.navBarOpen === true */}
        <ul className={"NavBar_ItemList"} style={styles(activeTheme).list}>
          {routes.map((item, index) => {
            return (
              <li
                className={"NavBar_Item"}
                style={{...styles(activeTheme, isHover, index, activeRoute, item.route).item, width: props.navBarOpen ? "auto" : 40, paddingLeft: props.navBarOpen ? 70 : 0 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleNavigate(item.route)}
                key={"NavBar_Item" + index}
              >
                <div className={"NavBar_ItemIcon"} style={styles(activeTheme, isHover, index, activeRoute, item.route).itemIcon}>
                  <Icon name={activeRoute === item.route ? item.activeIcon : item.icon}/>
                </div>

                <span className={"NavBar_ItemText"} style={{...styles(activeTheme, isHover, index, activeRoute, item.route).itemText, display: props.navBarOpen ? "block" : "none"}}>
                  {selectedLocale[item.route]?.title}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
