import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecursiveMenu from "./components/RecursiveMenu";
import menus from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecursiveMenu menus={menus} />
    </>
  );
}

export default App;
