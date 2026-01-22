import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="screen">
      <h1 className="title">Single Page Application</h1>

      <div className="nav">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>

      <div className="content">
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;