import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/tiers-parties/Navbar';
import Accueil from './views/Accueil';
import Parcours from './views/Parcours';
import Evenements from './views/Evenements';
import APropos from './views/APropos';
import Footer from './components/tiers-parties/Footer';
import MentionsLegales from './views/MentionsLegales';
import Contact from './views/Contact';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/a_propos" element={<APropos />} />
            <Route path="/mentions_legales" element={<MentionsLegales />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" exact  element={<Accueil />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
