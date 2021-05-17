import "./App.css";
import Class from "./components/Class";
import Weather from "./components/Weather";

function App() {
  const sun = "🌞"
  const rain = "⛈️"
  const [speeding, setSpeeding] = useState(false);
  const car = speeding ? "🚓" : "🚗";
  return (
    <div 
    className="App"
    style={{ backgroundColor: "blue", height: "825px", width: "100%" }}
    >
     <h1>App.js</h1>
     <button onClick={() => setSpeeding(!speeding)}>Person is speeding</button>
     <Weather />
    </div>
  );
}

export default App;
