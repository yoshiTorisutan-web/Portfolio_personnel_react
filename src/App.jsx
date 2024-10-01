import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
  HelpButton,
  LegalMentions,
  ConfidentialPolitic,
} from "./components";

import "./index.css";

const App = () => {
  useEffect(() => {
    // Désactiver le clic droit sur tout le site
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    // Désactiver l'ouverture des outils de développement avec F12 et Ctrl+Shift+I
    const disableDevTools = (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
      }
    };

    // Attacher les événements lors du montage du composant
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableDevTools);

    // Nettoyer les événements lors du démontage du composant
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);
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
                <div className="relative z-0 bottomFooter">
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/mentions-legales" element={<LegalMentions />} />
          <Route
            path="/confidential-politic"
            element={<ConfidentialPolitic />}
          />
        </Routes>
        <ScrollToTopButton />
        <HelpButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
