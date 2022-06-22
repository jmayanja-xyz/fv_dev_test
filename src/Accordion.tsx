import { useState } from "react";
import "./Accordion.css";
import Register from "./Register";

export interface Props {
  title: string;
}

const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{props.title}</div>
          </div>

          {isActive && (
            <div className="accordion-content">
              {props.title === "Step 1: Your details" ? (
                <Register />
              ) : (
                <div> Comments </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
