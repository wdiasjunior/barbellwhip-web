import React, { useState, useEffect, } from "react";

import { useAtom } from "jotai";
import { activeThemeAtom, selectedLocaleAtom, } from "../../helpers/jotai/atomsWithStorage";

import Icon from "../icon";

import { Link, } from "react-router-dom";

import { routesProgramPage, routesProgramEditorPage } from "./routes";
import styles from "./bottomTabBarStyles.tsx";
import "./bottomTabBar.css";

interface Props {
  isProgramPage: boolean;
}

const BottomTabBar = (props: Props) => {

  const [activeTheme, ] = useAtom(activeThemeAtom);
  const [selectedLocale, ] = useAtom(selectedLocaleAtom);

  const [activeRoute, setActiveRoute] = useState("/"); // should be a jotai atom?
  const isProgramPage = true;
  const routes = props.isProgramPage ? routesProgramPage : routesProgramEditorPage;

  const handleSelectRoute = (_route: string) => {
    // console.log(_route);
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
      <nav className={"BottomTabBar"} style={styles(activeTheme).container}>
        <div className={"BottomTabBar_ItemList"} style={styles(activeTheme).list}>
          {routes.map((item, index) => {
            return (
              <Link
                to={item.route}
                className={"BottomTabBar_Item"}
                style={{...styles(activeTheme, isHover, index, activeRoute, item.route).item}}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleSelectRoute(item.route)}
                key={"BottomTabBar_Item" + index}
              >
                <div className={"BottomTabBar_ItemIconWrapper"} style={styles(activeTheme, isHover, index, activeRoute, item.route).itemIconWrapper}>
                  <div className={"BottomTabBar_ItemIcon"} style={styles(activeTheme, isHover, index, activeRoute, item.route).itemIcon}>
                    <Icon name={activeRoute === item.route ? item.activeIcon : item.icon}/>
                  </div>
                </div>

                <span className={"BottomTabBar_ItemText"} style={{...styles(activeTheme, isHover, index, activeRoute, item.route).itemText}}>
                  {item.route === "/" ? selectedLocale["programPage"]?.title : selectedLocale[item.route.replace("/", "")]?.title}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  );
}

export default BottomTabBar;
