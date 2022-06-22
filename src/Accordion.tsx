import { useState } from "react";
import "./Accordion.css";
import StepOneForm from "./components/StepOneForm/StepOneForm";
import StepTwoForm from "./components/StepTwoForm/StepTwoForm";
import StepThreeForm from "./components/StepThreeForm/StepThreeForm";

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
      {isActive && <div className="accordion-content">

      {(() => {
        switch (props.title) {
          case 'Step 1: Your details':
            return <StepOneForm/>
          case 'Step 2: More comments':
            return <StepTwoForm/>
          case 'Step 3: Final Comments':
            return <StepThreeForm/>
          default:
            return null
        }
      })()}
          
          </div>}
    </div>
  );
};

export default Accordion;
