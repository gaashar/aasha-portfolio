import "./index.scss";
import { useRef } from "react";

export const Accordion = ({ handleToggle, active, project }) => {
  const contentEl = useRef();
  const { title, id, content } = project;

  return (
    <div class="accordion-card">
      <div class="accordion-header">
        <div
          class={`accordion-toggle ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h3 class="title">{title}</h3>
          <i class="gg-chevron-down icon" />
        </div>
      </div>
      <div
        ref={contentEl}
        class={`accordion-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div class="accordion-content">
          <p class="content">{content}</p>
        </div>
      </div>
    </div>
  );
};
