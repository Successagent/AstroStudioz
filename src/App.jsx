import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Services, Faq, Contact } from "./pages";
import "./App.css";

function App() {
  const [active, setActive] = useState(0);

  const toggleActive = (e) => {
    if (e.target.id === "tab-1") {
      return setActive(1);
    }
    if (e.target.id === "tab-2") {
      return setActive(2);
    }
    if (e.target.id === "tab-3") {
      return setActive(3);
    }
    if (e.target.id === "tab-4") {
      return setActive(4);
    }
    if (e.target.id === "tab-5") {
      return setActive(5);
    }
    if (e.target.id === "tab-6") {
      return setActive(6);
    }
    if (e.target.id === "tab-7") {
      return setActive(7);
    }
    if (e.target.id === "tab-8") {
      return setActive(8);
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="about"
        element={<About toggleActive={toggleActive} active={active} />}
      />
      <Route path="services" element={<Services />} />
      <Route
        path="faq"
        element={<Faq toggleActive={toggleActive} active={active} />}
      />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
