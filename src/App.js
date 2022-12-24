import About from "./components/About";
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

      <SocialLinks />
    </div>
  );
}

export default App;
