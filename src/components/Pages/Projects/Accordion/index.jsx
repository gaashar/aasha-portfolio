import "./index.scss";
import { useRef } from "react";

export const Accordion = ({ handleToggle, active, project }) => {
  const contentEl = useRef();
  const { title, id, content } = project;

  return (
    <div className="accordion-card">
      <div className="accordion-header">
        <div
          className={`accordion-toggle ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h3 className="title">{title}</h3>
          <i className="gg-chevron-down icon" />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`accordion-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="accordion-content">
          <span className="content">{content}</span>
        </div>
      </div>
    </div>
  );
};
