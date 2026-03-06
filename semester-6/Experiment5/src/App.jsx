import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;