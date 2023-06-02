import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={`p-2 d-flex justify-content-evenly align-items-center position-fixed bottom-0 w-100`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-facebook text-white" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" fill="white"></path> </svg>
          <NavLink to='contact' className='text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover '>Nous contacter</NavLink>
          <NavLink className='text-white text-decoration-none pe-none' aria-disabled="true">Copyright © 2023 La Marche c’est l’pied</NavLink>
          <NavLink to="mentions_legales" className='text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover'>Mentions légales</NavLink>
        {/* TODO: Mettre l'url correspondante */}
        <a href="" target="_blank" className='text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover'>S’inscrire</a>
    </footer>
  )
}

export default Footer