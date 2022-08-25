import { useState } from "react";
import ContextDark from "./ContextDark";
const ContextState = (props) => {
  const [dark, setDark] = useState("");

  const handleDarkOnlick = () => {
    if (dark === "") {
      setDark("dark");
    } else {
      setDark("");
    }
  };
  return (
    <ContextDark.Provider value={{ handleDarkOnlick, dark }}>
      {props.children}
    </ContextDark.Provider>
  );
};

export default ContextState;
