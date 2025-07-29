import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./project/Home";
import Navbar from "./project/Navbar";
import About from "./project/About";
import Services from "./project/Services";
import Portfolio from "./project/Portfolio";
import Contact from "./project/Contact";
import Footer from "./project/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
