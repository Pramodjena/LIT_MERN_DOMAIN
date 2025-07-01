import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
