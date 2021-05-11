import './App.css';
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import AboutContainer from "./components/AboutContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <h1></h1> */}
      <Nav />
      <Sidebar />
      <AboutContainer />     
      <AboutMe />      
    </div>
  );
}

export default App;
