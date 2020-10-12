import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbo from './components/Jumbotron';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import FooterLayout from './components/Footer';

function App() {
  //--------hooks-----------//
  // hook for contact form SPA
  const [contactSelected, setContactSelected] = useState(false);
  // hook for resume SPA
  const [resumeSelected, setResumeSelected] = useState(false);
  // hook for portfolio SPA
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  //-------return----------//
  return (
    <div>
      <Jumbo></Jumbo>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>
        {(() => {
          if (!contactSelected && !resumeSelected && !portfolioSelected) {
            return (
              <>
                <About></About>
              </>
            );
          } else if (contactSelected) {
            return (
              <>
                <ContactForm></ContactForm>
              </>
            );
          } else if (portfolioSelected) {
            return (
              <>
                <Portfolio></Portfolio>
              </>
            );
          } else {
            return (
              <>
                <Resume></Resume>
              </>
            );
          }
        })()}
      </main>
      <footer>
        <FooterLayout></FooterLayout>
      </footer>
    </div>
  );
}

export default App;
