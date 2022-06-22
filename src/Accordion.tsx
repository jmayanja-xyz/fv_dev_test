import { useState } from "react";
import "./Accordion.css";

export interface Props {
  title: string;
}

const Accordion = (props: Props) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="accordion-text">{props.title}</div>
      </div>
      {isActive && <div className="accordion-content">hello</div>}
    </div>
  );
};

export default Accordion;
