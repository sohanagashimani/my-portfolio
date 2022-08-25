import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import "./projects.css";
import data from "../../data";
import ContextDark from "../../context/ContextDark";
const Projects = () => {
  const darkModeFunc = useContext(ContextDark);
  const { dark } = darkModeFunc;
  return (
    <div className={"app__projects " + dark}>
      <h1>My Projects</h1>
      <div className="app__projects-cards">
        {data?.map((item, index) => {
          return (
            <div className="square" id={item.name} key={index}>
              <h2>{item.name}</h2>
              <p>{item.info}</p>
              <br />
              <a
                className="gitIcon"
                rel="noreferrer"
                href={item.link}
                target="_blank"
              >
                <span className="text">View Project</span>
                <BsGithub />
              </a>
              <img className="projectImg" src={item.imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
