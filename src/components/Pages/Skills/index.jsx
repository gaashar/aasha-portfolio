import { Card } from "./Card";
import { skillsInfo } from "./SkillsInfo";
import "./index.scss";

export const Skills = () => {
  return (
    <div className="main-body">
      <div className="heading">
        <h3>SKILLS</h3>
        <p>Tech stacks I have worked on, </p>
      </div>
      <div className="skills">
        {skillsInfo.map((skills) => (
          <Card info={skills} key={skills.title} />
        ))}
      </div>
    </div>
  );
};
