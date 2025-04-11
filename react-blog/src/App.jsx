import "./App.css";
import NavBar from "./navBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainSection from "./mainSection/MainSection";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <MainSection />
    </Router>
  );
}

export default App;
