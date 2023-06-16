import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
  ScrollToTopButton
} from "./components";

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-projects">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-color-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <div className="">
          <Projects />
        </div>

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="relative z-0">
          <Footer />
        </div>
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
