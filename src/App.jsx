import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
  ScrollToTopButton,
  LegalMentions,
} from "./components";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-projects">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="bg-about bg-cover bg-center bg-no-repeat">
                  <About />
                </div>
                <div className="bg-color-tech bg-cover bg-center bg-no-repeat pb-10">
                  <Tech />
                </div>
                <div>
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
              </>
            }
          />
          <Route path="/mentions-legales" element={<LegalMentions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
