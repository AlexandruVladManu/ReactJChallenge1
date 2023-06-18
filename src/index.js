import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="tree.jpg" alt="Alex" />;
}

function Intro() {
  return (
    <div>
      <h1>Alex M</h1>
      <p>
        Frond-end web developer, with a few cool projects and now learning React
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="🧙‍♂️" color="#3498db" />
      <Skill skill="JavaScript" emoji="✅️" color="orangered" />
      <Skill skill="React" emoji="👨‍🎓" color="yellow" />
      <Skill skill="Git and Github" emoji="👍" color="#e67e22" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
