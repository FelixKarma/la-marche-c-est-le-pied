import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/tiers-parties/Navbar';
import Acceuil from './views/Acceuil';
import Parcours from './views/Parcours';
import Evenements from './views/Evenements';
import APropos from './views/APropos';
import Footer from './components/tiers-parties/Footer';
import MentionsLegales from './views/MentionsLegales';

const App = () => {
  const urlFooterFixed = ['/parcours', '/evenements', '/mentions_legales', '/'];
  let currentUrl = document.location.href;

  const fonctionFooter = () => {
    for (const urlFixed of urlFooterFixed) {
      if (currentUrl.includes(urlFixed)) {
        return(
          <Footer fixed={currentUrl.includes(urlFixed)} />
          )
      }
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/a_propos" element={<APropos />} />
            <Route path="/mentions_legales" element={<MentionsLegales />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </main>
        {fonctionFooter()}
      </BrowserRouter>
    </>
  )
}

export default App;
