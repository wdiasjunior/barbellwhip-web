import React, { useState, useEffect, } from "react";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import Icon from "../icon";

import { routesProgramPage, routesProgramEditorPage } from "./routes";
import styles from "./bottomTabBarStyles.tsx";
import "./bottomTabBar.css";

// interface Props {
//   isProgramPage: boolean;
//   navigate: () => void;
// }

// const BottomTabBar = (props: Props) => {
const BottomTabBar = () => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [activeRoute, setActiveRoute] = useState("programPage"); // should be a jotai atom
  const isProgramPage = true;
  const routes = props.isProgramPage ? routesProgramPage : routesProgramEditorPage;

  // const handleNavigate = (_route: string) => {
  //   console.log(_route);
  //   setActiveRoute(_route);
  //   if(props.navBarOpen) {
  //     props.setbottomTabBarOpen(false);
  //   }
  // }
  //
  // const [isHover, setIsHover] = useState({ isHover: false, index: 0 });
  // const handleMouseEnter = (index: any) => {
  //   setIsHover({ isHover: true, index: index });
  // }
  // const handleMouseLeave = (index: any) => {
  //   setIsHover({ isHover: false, index: index });
  // }

  return (
    <>
      <nav className={"BottomTabBar"} style={styles(activeTheme).container}>
        {/*<ul className={"bottomTabBar_ItemList"} style={styles(activeTheme).list}>
          {routes.map((item, index) => {
            return (
              <li
                className={"bottomTabBar_Item"}
                style={{...styles(activeTheme, isHover, index, activeRoute, item.route).item, width: props.navBarOpen ? "auto" : 40, paddingLeft: props.navBarOpen ? 70 : 0 }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleNavigate(item.route)}
                key={"bottomTabBar_Item" + index}
              >
                <div className={"bottomTabBar_ItemIcon"} style={styles(activeTheme, isHover, index, activeRoute, item.route).itemIcon}>
                  <Icon name={activeRoute === item.route ? item.activeIcon : item.icon}/>
                </div>

                <span className={"bottomTabBar_ItemText"} style={{...styles(activeTheme, isHover, index, activeRoute, item.route).itemText, display: props.navBarOpen ? "block" : "none"}}>
                  {selectedLocale[item.route]?.title}
                </span>
              </li>
            )
          })}
        </ul>*/}
      </nav>
      {/*{props.navBarOpen && <div className="bottomTabBar_Backdrop" style={styles(activeTheme).backdrop} onClick={() => props.setbottomTabBarOpen(false)}></div>}*/}
    </>
  );
}

export default BottomTabBar;
