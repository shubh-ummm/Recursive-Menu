import React from "react";
import MenuList from "./MenuList";

const RecursiveMenu = ({ menus = [] }) => {
  return <MenuList list={menus} />;
};

export default RecursiveMenu;
