import React, { useState } from "react";
import { MenuItems } from "./MenuItems.js";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log(click);
    setClick(!click);
  };
  return (
    <>
      <ul className={click && "dropdown-menu clicked"} onClick={handleClick}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
