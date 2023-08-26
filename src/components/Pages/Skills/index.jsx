import { Card } from "./Card";
import { skillsInfo } from "./SkillsInfo";
import "./index.scss";

export const Skills = () => {
  return (
    <div class="main-body skills">
      {skillsInfo.map((skills) => (
        <Card info={skills} />
      ))}
    </div>
  );
};
