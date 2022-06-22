import './App.css';
import Accordion from './Accordion';


function App() {
  return (
    <div className="App">
      <Accordion title="Step 1: Your details"/>
      <Accordion title="Step 2: More comments"/>
      <Accordion title="Step 3: Final comments"/>
    </div>
  );
}

export default App;
