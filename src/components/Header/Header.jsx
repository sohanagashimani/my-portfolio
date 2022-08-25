import { useContext } from "react";
import "./header.css";
import ContextDark from "../../context/ContextDark";
const Header = () => {
  const darkModeFunc = useContext(ContextDark);
  const { handleDarkOnlick } = darkModeFunc;
  return (
    <div className="app__header">
      <div className="switch" onClick={handleDarkOnlick}>
        <div className="flicker"></div>
        <div className="moon"></div>
      </div>
    </div>
  );
};

export default Header;
