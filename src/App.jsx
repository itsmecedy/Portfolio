import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css"; // Import AOS styles

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
