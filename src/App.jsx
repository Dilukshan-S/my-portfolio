import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import AnimatedBackground from "./contexts/AnimatedBackground";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatedBackground />
        <Navbar />
        <div className="pt-20 px-4 pb-10 max-w-5xl mx-auto">
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <footer className="text-center text-gray-500 dark:text-gray-400 mt-10">
            <p>
              &copy; {new Date().getFullYear()} Dilukshan Sathiyamoorthy. All
              rights reserved.
            </p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}
