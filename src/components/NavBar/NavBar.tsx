import React from "react";

import { styles } from "./NavBarStyles.tsx";

const NavBar = () => {

  // console.log(styles);
  const theme = {
    text: "#444009",
  }

  return (
    <>
      <div style={styles(theme).container}>
        <ul>
          <li>program</li>
          <li style={styles(theme).text}>1rm calculator</li>
          <li>plate math</li>
          <li>program editor</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
