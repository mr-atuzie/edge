import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import News from "./components/News";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Specialization from "./components/Specialization";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Specialization />
      <Projects />
      <Reviews />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
