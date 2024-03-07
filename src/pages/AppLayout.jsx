import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import History from "./History";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Header from "../components/Header";
import Hero from "../components/Hero";

function AppLayout() {
  return (
    <div className="roboto-medium">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default AppLayout;
