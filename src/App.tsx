import Accordion from "./Accordion";
import "./App.css";

const App = () => {
  const accordionData = [
    {
      title: "Step 1: Your details",
    },
    {
      title: "Step 2: More comments",
    },
    {
      title: "Step 3: Final Comments",
    },
  ];

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

// {accordionData.map(({ title }) => (
//   <Accordion title={title} />
// ))}

{
  /* <Accordion title="Step 1: Your details" />
      <Accordion title="Step 2: More comments" />
      <Accordion title="Step 3: Final comments" /> */
}

export default App;
