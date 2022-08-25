import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import ContextDark from "./context/ContextDark";
import "./app.css";
function App() {
  const darkModeFunc = useContext(ContextDark);
  const { dark } = darkModeFunc;
  return (
    <div style={{ transition: "0.3s" }} className={dark === "" ? "" : "dark"}>
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
