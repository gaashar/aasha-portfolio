import { Card } from "./Card";
import { skillsInfo } from "./SkillsInfo";
import "./index.scss";
import { ProgressCard } from "./ProgressCard";

export const Skills = () => {
  return (
    <div className="main-body">
      <div className="heading">
        <h3>SKILLS</h3>
        <p>Tech stacks I have worked on, </p>
      </div>
      <div className="skills">
        <ProgressCard skills={skillsInfo.technical} />
        <Card info={skillsInfo.experience} />
      </div>
    </div>
  );
};
