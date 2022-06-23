import Accordion from "./Accordion";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <div className="accordion">
        <Accordion title="Step 1: Your details" />
        <Accordion title="Step 2: More comments" />
        <Accordion title="Step 3: Final comments" />
      </div>
    </div>
  );
};


export default App;
