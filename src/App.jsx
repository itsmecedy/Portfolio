import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
