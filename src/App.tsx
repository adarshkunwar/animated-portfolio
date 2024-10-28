import "./App.css";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
