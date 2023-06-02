import React, { useEffect } from 'react'
import Bouton from '../components/utils-components/Bouton'
import '../assets/css/Accueil.css'

const Acceuil = () => {

  useEffect(() => {
    document.body.setAttribute('class','overflow-hidden');
    return () => {
      document.body.removeAttribute('class');
    };
  }, []);

  return (
    <div id='accueil'>
      <figure className='position-absolute top-50 start-50 translate-middle' >
        {/* TODO: Mettre l'url correspondante */}
        <a href="http://" target="_blank">
          <Bouton text="S'inscrire" className="bg-green text-white fs-4 me-5" />
        </a>
        <Bouton text="Voir les parcours" className="btn-primary text-white fs-4 ms-5" />
      </figure>
    </div>
  )
}

export default Acceuil