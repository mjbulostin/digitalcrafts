import './App.css';
import Feeling from "./Components/Feeling";
import Sleep from "./Components/Sleep";
import Exercise from "./Components/Exercise";
import Eat from "./Components/Eat";

function App() {
  return (
    <div className="App">
      <h1>Daily Pulse Check</h1>
      <Feeling />
      <Sleep />
      <Exercise />
      <Eat />
    </div>
  );
}

export default App;
