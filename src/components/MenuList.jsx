import React from "react";
import MenuItem from "./MenuItem";
import "./styles.css";
const MenuList = ({ list = [] }) => {
  return (
    <ul className="MenuList-Container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
