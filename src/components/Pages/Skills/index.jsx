import { Card } from "./Card";
import { skillsInfo } from "./SkillsInfo";
import "./index.scss";

export const Skills = () => {
  return (
    <div class="main-body">
      <div class="heading">
        <h3>SKILLS</h3>
        <p>Tech stacks I have worked on, </p>
      </div>
      <div class="skills">
        {skillsInfo.map((skills) => (
          <Card info={skills} />
        ))}
      </div>
    </div>
  );
};
