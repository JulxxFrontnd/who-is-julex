import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact"; // Fixed the extra slash here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Pro />}></Route>
        <Route path="/contact" element={<Cont />}></Route>

        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "white",
              }}
            >
              Error: Page Not Found!
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return <Homepage />;
}
function Pro() {
  return <Projects />;
}
function Cont() {
  return <Contact />;
}

export default App;
