import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components//Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/experience" element={<Exp />}></Route>
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
    </>
  );
}
function Home() {
  return <Homepage />;
}
function Exp() {
  return <Experience />;
}
function Pro() {
  return <Projects />;
}
function Cont() {
  return <Contact />;
}

export default App;
