import About from "./components/About";
import Contact from "./components/Contact";
import Experiencie from "./components/Experiencie";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experiencie />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
